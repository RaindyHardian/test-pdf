import Head from "next/head";

export default function Home() {
  return (
    <div
      style={{
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '100px',
      }}
    >
      <Head>
        <title>Just for testing ✌️</title>
      </Head>
      <h1>Test show PDF</h1>
      <p>using embed</p>
      <embed
        src="https://arxiv.org/pdf/2206.07819.pdf"
        style={{ width: '100%', height: '400px' }}
      ></embed>
      <p style={{ marginTop: '26px' }}>using iframe</p>
      <iframe
        src="https://arxiv.org/pdf/2206.07819.pdf"
        style={{ width: '100%', height: '400px' }}
      ></iframe>
      <p style={{ marginTop: '26px' }}>using google docs viewer</p>
      <iframe
        src="https://docs.google.com/viewer?url=https://arxiv.org/pdf/2206.07819.pdf&embedded=true"
        style={{ width: '100%', height: '400px' }}
      ></iframe>
    </div>
  );
}
