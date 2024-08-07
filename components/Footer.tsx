export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Billie Heidelberg. All rights reserved.</p>
        <div className="mt-4">
          {/* <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">Twitter</a> */}
          <a
            href="https://github.com/theamazingmrb"
            className="text-blue-400 hover:text-blue-300 mx-2"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bheidelberg/"
            className="text-blue-400 hover:text-blue-300 mx-2"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
