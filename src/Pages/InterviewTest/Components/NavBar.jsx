const NavBar = () => {

  const leftCircleAndSquare = () => {
    const circle = () => {
      const circleCss = {
        height: '30px',
        width: '30px',
        borderRadius: '50%',
        backgroundColor: 'cyan'
      }
      return (
        <div style={circleCss}>
        </div>
      )
    }

    const square = () => {
      const squareCss = {
        height: '30px',
        width: '30px',
        backgroundColor: 'pink'
      }
      return (
        <div style={squareCss}>
        </div>
      )
    }

    const circleAndSqaureCss = {
      marginLeft: '50px',
      width: '80px',
      display: 'flex',
      justifyContent: 'space-between',
    }

    return (
      <div style={circleAndSqaureCss} >
        {circle()}
        {square()}
      </div>
    )
  }

  const searchBar = () => {
    const searchBarCss = {
      width: '200px',
      height: '80px',
      borderRadius: '10px',
      backgroundColor: 'lime',
      marginRight: '100px'
    }
    return(
      <div style={searchBarCss}>

      </div>
    )
  }

  const navbarCss = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: '4000px',
    width: '100%',
    backgroundColor: 'grey'
  }

  return ( 
    <div style={navbarCss}>
      {leftCircleAndSquare()}
      {searchBar()}
    </div>
   );
}
 
export default NavBar;