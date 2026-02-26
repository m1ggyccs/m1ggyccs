import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-800/50 bg-slate-950 relative z-10">
      <p>&copy; {new Date().getFullYear()} Andrei Miguel A. David. All rights reserved.</p>
    </footer>
  );
}