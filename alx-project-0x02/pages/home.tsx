import React, { useState } from 'react';
import Header from '../components/layout/Header';
// eslint-disable-next-line import/no-absolute-path
import Card from '@/components/common/Card';
import PostModal from '../components/common/PostModal';

export default function Home() {
  const [cards, setCards] = useState([
    { title: 'First Card', content: 'This is the content of the first card.' },
    { title: 'Second Card', content: 'Here is some more content in another card.' }
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddCard = (data: { title: string; content: string }) => {
    setCards(prev => [...prev, data]);
  };

  return (
    <>
      <Header />
      <main>
        <h1>Home Page</h1>
        <p>Welcome to the Home page!</p>
        <button onClick={() => setModalOpen(true)} style={{ marginBottom: '1rem' }}>
          Add New Card
        </button>
        <PostModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddCard}
        />
        {cards.map((card, idx) => (
          <Card key={idx} title={card.title} content={card.content} />
        ))}
      </main>
    </>
  );
}