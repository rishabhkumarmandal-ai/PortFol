import { BookOpen, Star, Award, Brain, Github, Linkedin, Instagram, Mail } from 'lucide-react';

const MyReadsSection = () => {
  const bookCategories = [
    {
      id: 1,
      title: 'Business & Entrepreneurship',
      icon: Award,
      color: 'from-green-400 to-teal-500',
      books: [
        'The Lean Startup - Eric Ries',
        'Zero to One - Peter Thiel',
        'Good to Great - Jim Collins',
        'The Innovator\'s Dilemma - Clayton Christensen',
        'Think and Grow Rich - Napoleon Hill'
      ]
    },
    {
      id: 2,
      title: 'Science Fiction',
      icon: Brain,
      color: 'from-purple-400 to-blue-500',
      books: [
        'Dune - Frank Herbert',
        'Foundation Series - Isaac Asimov',
        'Neuromancer - William Gibson',
        'The Martian - Andy Weir',
        'Ender\'s Game - Orson Scott Card'
      ]
    },
    {
      id: 3,
      title: 'Encyclopedia',
      icon: BookOpen,
      color: 'from-blue-400 to-cyan-500',
      books: [
        'Sapiens - Yuval Noah Harari',
        'A Brief History of Time - Stephen Hawking',
        'The Selfish Gene - Richard Dawkins',
        'Cosmos - Carl Sagan',
        'The Art of War - Sun Tzu'
      ]
    },
    {
      id: 4,
      title: 'Discipline & Self-Development',
      icon: Star,
      color: 'from-orange-400 to-red-500',
      books: [
        'Atomic Habits - James Clear',
        'The 7 Habits - Stephen Covey',
        'Mindset - Carol Dweck',
        'The Power of Now - Eckhart Tolle',
        'Deep Work - Cal Newport'
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500/20 rounded-full animate-float" />
        <div className="absolute top-60 right-20 w-20 h-20 bg-purple-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-18 h-18 bg-green-500/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-10 w-22 h-22 bg-orange-500/20 rounded-full animate-float" style={{ animationDelay: '6s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-ocean-400 bg-clip-text text-transparent">
            My Reads
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Books that inspire, educate, and fuel my passion for continuous learning and growth
          </p>
          
          
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className="group bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-ocean-400/50 transition-all duration-500 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-all duration-300`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-ocean-300 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.books.map((book, bookIndex) => (
                      <div
                        key={bookIndex}
                        className="group/book bg-white/5 rounded-xl p-3 border border-white/5 hover:border-ocean-400/30 transition-all duration-300 hover:bg-white/10"
                      >
                        <div className="flex items-start">
                          <BookOpen size={16} className="text-ocean-400 mr-3 mt-1 flex-shrink-0" />
                          <p className="text-white/80 text-sm leading-relaxed group-hover/book:text-white transition-colors">
                            {book}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating book icons */}
        <div className="absolute top-1/4 left-1/5 animate-bounce" style={{ animationDelay: '1s' }}>
          <BookOpen className="text-blue-400/30" size={24} />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce" style={{ animationDelay: '3s' }}>
          <Brain className="text-purple-400/30" size={28} />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-bounce" style={{ animationDelay: '5s' }}>
          <Star className="text-orange-400/30" size={26} />
        </div>
      </div>
    </section>
  );
};

export default MyReadsSection;
