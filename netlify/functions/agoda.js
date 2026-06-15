exports.handler = async function(event) {
  const AGODA_SITE_ID = '1925990';
  const AGODA_API_KEY = '81c5cba9-907c-4bf8-9891-9f8500a0b60c';

  try {
    const body = JSON.parse(event.body || '{}');
    const res = await fetch('https://affiliateapi7643.agoda.com/affiliateservice/lt_v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${AGODA_SITE_ID}:${AGODA_API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message }),
    };
  }
};
