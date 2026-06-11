const SUPABASE_URL = 'https://wumpbrsnzoybwszjsbwv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1bXBicnNuem95YndzempzYnd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5ODQ2NDAsImV4cCI6MjA5NTU2MDY0MH0.p9RPH3gmUpjNHvLeZGSkXe5ICsjQI1NzWg-YZpCJE-Y';
const BUCKET_URL = `${SUPABASE_URL}/storage/v1/object/public/images-album`;
const ALBUM_URL = 'https://albumcsydp.vercel.app';

export default async function handler(req, res) {
  const { id } = req.query;
  const stickerId = parseInt(id, 10);

  if (isNaN(stickerId)) {
    res.writeHead(301, { Location: ALBUM_URL });
    return res.end();
  }

  const ua = (req.headers['user-agent'] || '').toLowerCase();
  const isCrawler = /facebookexternalhit|twitterbot|whatsapp|telegram|slackbot|discord|linkedin|slack|imgur|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebot|outbrain|pinterest/i.test(ua);

  if (!isCrawler) {
    res.writeHead(301, { Location: ALBUM_URL });
    return res.end();
  }

  let nombre = 'Figurita';
  let imagenUrl = `${BUCKET_URL}/figuritasVacias/${id}.png`;

  try {
    const resp = await fetch(
      `${SUPABASE_URL}/rest/v1/figuritas?id=eq.${stickerId}&select=nombre,imagen_url`,
      { headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` } }
    );
    const data = await resp.json();
    if (data && data.length > 0) {
      nombre = data[0].nombre;
      imagenUrl = data[0].imagen_url || `${BUCKET_URL}/stickers/${id}.png`;
    }
  } catch {}

  const mensaje = `🌟 ¡Mirá! Conseguí a ${nombre} en el Álbum CSYDP 🎯`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`
<!DOCTYPE html><html lang="es"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Álbum CSYDP - ${nombre}</title>
<meta property="og:title" content="Álbum CSYDP - ${nombre}">
<meta property="og:description" content="${mensaje}">
<meta property="og:image" content="${imagenUrl}">
<meta property="og:image:width" content="400">
<meta property="og:image:height" content="533">
<meta property="og:type" content="website">
<meta property="og:url" content="${ALBUM_URL}/sticker/${id}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Álbum CSYDP - ${nombre}">
<meta name="twitter:description" content="${mensaje}">
<meta name="twitter:image" content="${imagenUrl}">
</head>
<body style="background:#121414;color:#e2e2e2;font-family:sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;text-align:center;">
<div>
<img src="${imagenUrl}" alt="${nombre}" style="width:200px;height:auto;margin-bottom:16px;border-radius:8px;">
<p style="font-size:18px;margin-bottom:24px;">${mensaje}</p>
<a href="${ALBUM_URL}" style="color:#d2031e;text-decoration:none;font-weight:700;font-size:16px;">Ir al álbum →</a>
</div>
</body>
</html>
  `);
}
