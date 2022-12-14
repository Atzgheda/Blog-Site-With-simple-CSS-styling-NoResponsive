import './topbar.css'
import {Link} from 'react-router-dom'

function Topbar() {
  const user = false
  return (
    <div className='top'>
      <div className="topLeft">
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
        <i className='topIcon fab fa-pinterest-square'></i>
        <i className='topIcon fab fa-instagram-square'></i>
        </div>
      <div className="topCenter">
        <ul className="topList">
            <li className='topListItem'>
              <Link className='link' to='/'>HOME</Link>
            </li>
            <li className='topListItem'> <Link className='link' to='/'>ABOUT</Link></li>
            <li className='topListItem'> <Link className='link' to='/'>CONTACT</Link></li>
            <li className='topListItem'> <Link className='link' to='/write'>WRITE</Link></li>
            <li className='topListItem'>
              {user && 'LOGOUT'}
            </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img 
            className='topImg' 
            src='https://scontent-mxp2-1.xx.fbcdn.net/v/t1.6435-9/75282398_10215113743733425_7596294702639349760_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L2ub94cAggQAX86Q658&_nc_ht=scontent-mxp2-1.xx&oh=00_AT_xApYnabzib7POEaLybyKOIm7DuRwkOA1BeP5ln_4_ZQ&oe=631991C3' 
            alt='Antonio'/>
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                <Link className='link' to='/login'>LOGIN</Link>
              </li>
              <li className='topListItem'>
                <Link className='link' to='/register'>REGISTER</Link>
              </li>
            </ul>
           
          )
        }
        
        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  )
}

export default Topbar
