import Action from "components/action/Action";
import Input, { EControlStatus } from "components/input-fields/inputField";
import { ESize, EState } from "constants/properties";
import InlineSVG from "react-inlinesvg/esm";

interface LogoProps {
  src: string
  width?: string
}
const Logo = ({ src, width = "140px" }: LogoProps) => (
  <div className="m-10">
    <InlineSVG
      src={src}
      width={width}
      className={`fill-current text-black dark:text-white`}
    />
  </div>
);

const SearchBar = () => (
  <div className="m-10">
    <Input
      controlStatus={EControlStatus.NORMAL}
      inputSize={ESize.MEDIUM}
      placeholder="Search"
    />
  </div>
);

const BarButton = ({ label }: { label: string }) => (
  <Action label={label} state={EState.ACTIVE} size={ESize.MEDIUM} />
);

const NetworkSelector = () => <div />;
const WalletSelector = () => <div />;
const UserMenu = () => <div />;

interface GroupProps {
  children: JSX.Element[]
  className?: string
}
const Group = ({ children, className = "" }: GroupProps) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      {children}
    </div>
  );
};

interface NavbarProps {
  logoUrl: string
}
const Navbar = ({ logoUrl }: NavbarProps) => {
  return (
    <div className="bg-white dark:bg-gray-850 flex justify-around items-center p-10 border-b border-solid border-gray-150 dark:border-gray-800">
      <Group>
        <Logo src={logoUrl} />
        <SearchBar />
      </Group>
      <Group>
        <BarButton label='Create' />
        <BarButton label='Marketplace' />
        <BarButton label='Resources' />
      </Group>
      <Group>
        <NetworkSelector />
        <WalletSelector />
        <UserMenu />
      </Group>
    </div>
  );
};

export default Navbar;
