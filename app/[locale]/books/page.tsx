import Image from 'next/image';
import { FaStar, FaStarHalf } from 'react-icons/fa';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  rating: number;
  coverImage: string;
  isPreorder?: boolean;
  reviews?: number;
  categories: string[];
}

const books: Book[] = [
  {
    id: 1,
    title: "Where the Sun Sets Like Red Paint",
    author: "Author Name",
    price: 19.99,
    rating: 4.5,
    reviews: 12,
    coverImage: "/book.png",
    categories: ["Fiction", "Contemporary"]
  },
  {
    id: 2,
    title: "The Last Journey",
    author: "Writer Smith",
    price: 24.99,
    rating: 5,
    reviews: 8,
    coverImage: "/book.png",
    categories: ["Adventure", "Fiction"]
  },
  {
    id: 3,
    title: "Letters from Yesterday",
    author: "Jane Wordsworth",
    price: 15.99,
    rating: 4,
    reviews: 15,
    coverImage: "/book.png",
    categories: ["Romance", "Historical"]
  },
  {
    id: 4,
    title: "Ocean's Memory",
    author: "Mark Waters",
    price: 21.99,
    rating: 4.5,
    reviews: 6,
    coverImage: "/book.png",
    categories: ["Mystery", "Thriller"]
  },
  {
    id: 5,
    title: "The Silent Echo",
    author: "Sarah Winters",
    price: 18.99,
    rating: 4,
    reviews: 9,
    coverImage: "/book.png",
    categories: ["Science Fiction", "Mystery"]
  }
];

const StarRating = ({ rating, reviews }: { rating: number; reviews?: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="w-3 h-3 text-yellow-400" />
        ))}
        {hasHalfStar && <FaStarHalf className="w-3 h-3 text-yellow-400" />}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <FaStar key={`empty-${i}`} className="w-3 h-3 text-gray-300" />
        ))}
      </div>
      {reviews && <span className="text-xs text-gray-500 ml-1">({reviews})</span>}
    </div>
  );
};

export default function BooksPage() {

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-medium">Our books</h1>
            <Image 
              src="/reading-person.png"
              alt="Person reading"
              width={40}
              height={30}
              className="object-contain"
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Books Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {books.map((book) => (
            <div key={book.id} className="flex flex-col">
              <div className="relative aspect-[3/4] mb-2">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
              <h3 className="text-xs font-medium mb-1 line-clamp-2">{book.title}</h3>
              <p className="text-xs text-gray-600 mb-1">{book.author}</p>
              <StarRating rating={book.rating} reviews={book.reviews} />
              <p className="text-xs font-medium mt-1">${book.price.toFixed(2)}</p>
              <button className="mt-2 bg-black text-white px-3 py-1 rounded text-xs">
                Add to cart
              </button>
            </div>
          ))}
          {/* Pre-order placeholder */}
          <div className="flex flex-col">
            <div className="relative aspect-[3/4] mb-2 bg-gray-100 rounded-sm flex items-center justify-center">
              <span className="text-2xl text-gray-400">?</span>
            </div>
            <h3 className="text-xs font-medium mb-1">Pre-order book to be announced</h3>
            <button className="mt-2 bg-black text-white px-3 py-1 rounded text-xs">
              Coming soon
            </button>
          </div>
        </div>

        {/* Featured Book Section */}
        <section className="mt-12 bg-gray-50 p-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative aspect-square md:aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/featured-book.png"
                alt="Featured book"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-3">
              <h2 className="text-lg font-medium">Featured Book of the Month</h2>
              <StarRating rating={5} reviews={24} />
              <p className="text-sm text-gray-600">
                Discover our handpicked selection for this month. A captivating story that will keep you engaged from start to finish.
              </p>
              <button className="bg-black text-white px-4 py-2 rounded text-sm">
                Learn more
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-12 bg-gray-100 p-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-lg font-medium mb-4">Sign up for 15% off your first order!</h2>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded border border-gray-300 text-sm focus:outline-none focus:border-black"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
