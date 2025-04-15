import React, { useCallback } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed w-full bg-light-bg/90 dark:bg-dark-bg/90 backdrop-blur-md z-50 border-b border-light-border dark:border-dark-border transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Updated Logo Gradient */}
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary bg-clip-text text-transparent">
            SS
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle and Social Links */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Updated Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-light-secondary/20 dark:bg-dark-secondary/20 text-light-secondary dark:text-dark-secondary hover:bg-light-secondary/30 dark:hover:bg-dark-secondary/30 transition-colors duration-200"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {/* Updated Social Links */}
            <a href="https://github.com/SANTHOSH-SACHIN" target="_blank" rel="noopener noreferrer" className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/santhosh-sachin/" target="_blank" rel="noopener noreferrer" className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200">
              <Linkedin size={20} />
            </a>
            <a href="mailto:santhosh.s.sachin@gmail.com" className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             {/* Updated Mobile Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-light-secondary/20 dark:bg-dark-secondary/20 text-light-secondary dark:text-dark-secondary transition-colors duration-200"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
             {/* Updated Mobile Menu Button */}
            <button
              className="text-light-text dark:text-dark-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-light-card dark:bg-dark-card border-t border-light-border dark:border-dark-border shadow-lg">
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary w-full text-left py-2 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
