import { useState, useEffect } from 'react';
import Header from './components/Header';
import SMM from './pages/SMM';
import Websites from './pages/Websites';

function App() {
  const [currentPage, setCurrentPage] = useState<'smm' | 'websites'>('smm');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageChange = (page: 'smm' | 'websites') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      {currentPage === 'smm' && <SMM scrollY={scrollY} />}
      {currentPage === 'websites' && <Websites />}
    </div>
  );
}

export default App;
