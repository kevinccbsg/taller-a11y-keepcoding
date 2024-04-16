import Arrow from './Arrow';
import NavLinks from './NavLinks';
import Avatar from './Avatar';

export function Header() {
  return (
    <header className="text-center mb-10 h-screen bg-gradient-to-b flex justify-center items-center flex-col rounded-md p-4">
      <Avatar />
      <h1 className="font-bold">ByteMystique</h1>
      <p className="text-lg font-semibold text-neutral-300">Senior Developer</p>
      <p className="text-lg">📍 Palo alto, CA</p>
      <NavLinks />
      <Arrow />
    </header>
  );
}
