import Header from '../components/layout/Header';
import Button from '../components/common/Button';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <h1>About Page</h1>
        <p>This is the About page.</p>
        <div style={{ marginTop: '2rem' }}>
          <Button size="small" shape="rounded-sm">Small Rounded-sm</Button>
          <Button size="medium" shape="rounded-md">Medium Rounded-md</Button>
          <Button size="large" shape="rounded-full">Large Rounded-full</Button>
        </div>
      </main>
    </>
  );
}