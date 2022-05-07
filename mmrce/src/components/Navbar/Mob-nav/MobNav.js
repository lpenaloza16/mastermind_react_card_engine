//will be using temporary solution until something is found.

function MenuEvent() {
  let hbMenu = null;
  let ActiveMenu = () => {
    if (hbMenu != 1) {
      hbMenu = 1;
      alert("turned on");
    } else if (hbMenu === 1) {
      alert("turned off");
      hbMenu = 0;
    }
  };
  ActiveMenu();
}

export default MenuEvent;
//IF it starts to hoist then turn into a expression

// let MobNav = () => {

//   return {};
// };

// export default ActiveMenu;
