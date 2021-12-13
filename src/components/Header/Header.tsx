import Action from "components/action/Action";
import Input, { EControlStatus } from "components/input-fields/inputField";
import { ESize, EState } from "constants/properties";
import InlineSVG from "react-inlinesvg/esm";

const Logo = ({ src }) => {
  console.log(src);
  return (
    <div className='m-10'>
    <InlineSVG
      src={"./assets/logo/mintbase1.svg"}
      width="140px"
      className={`fill-current text-black dark:text-white`}
    >
      action
    </InlineSVG>
      </div>
  );
};
const SearchBar = () => (
  <div className='m-10'>
  <Input controlStatus={EControlStatus.NORMAL} inputSize={ESize.MEDIUM} placeholder='Search' />
    </div>
);
const BarButton = ({ children }: { children: string }) => (
  <Action label={children} state={EState.ACTIVE} size={ESize.MEDIUM} />
);
const NetworkSelector = () => <div />;
const WalletSelector = () => <div />;
const UserMenu = () => <div />;
const Group = ({ children }) => {
  return <div className="flex justify-center items-center">{children}</div>;
};

const Header = ({ logoUrl }) => {
  return (
    <div className="bg-gray-850 flex justify-around items-center p-10 border-b border-solid border-gray-800">
      <Group>
        <Logo src={logoUrl} />
        <SearchBar />
      </Group>
      <Group>
        <BarButton>Create</BarButton>
        <BarButton>Marketplace</BarButton>
        <BarButton>Resources</BarButton>
      </Group>
      <Group>
        <NetworkSelector />
        <WalletSelector />
        <UserMenu />
      </Group>
    </div>
  );
};

export default Header;
