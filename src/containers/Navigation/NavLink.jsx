import { A, usePath } from 'hookrouter';

const CustomA = (props) => {
  const path = usePath();
  let { href, getProps, ...anchorProps } = props;
  const isCurrent = path === href;
  return <A href={href} {...getProps({ isCurrent })} {...anchorProps} />;
};

export const NavLink = (props) => (
  <CustomA
    {...props}
    getProps={({ isCurrent }) => ({
      className: isCurrent ? 'navbar--active' : 'navbar--inactive'
    })}
  />
);
