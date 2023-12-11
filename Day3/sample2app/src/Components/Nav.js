// function Nav() {
//   return (
//     <div>
//       <nav class="navbar">
//         <h1 class="logo">Cinematrix</h1>
//         <ul>
//           <ul>
//             <a href="index3.html">REGISTER</a>
//           </ul>
//           <ul>
//             <a href="index2.html">LOGIN</a>
//           </ul>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Nav;

//Normal Function
//function Nav(){}
//Arrow Function
//const Nav=()=>{}

const Nav = () => {
  return (
    <>
      <nav class="navbar">
        <h1 class="logo">Cinematrix</h1>
        <ul>
          <ul>
            <a href="index3.html">REGISTER</a>
          </ul>
          <ul>
            <a href="index2.html">LOGIN</a>
          </ul>
        </ul>
      </nav>
      <div className="head">
        <p>SHADOW</p>
      </div>
    </>
  );
};

export default Nav;
