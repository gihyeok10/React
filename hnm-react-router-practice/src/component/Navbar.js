import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const menuList = ['여성','Diveded','남성','신생아/유아','아동','H&M Home','Sale','지속가능성']
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login')
    }

    const onKeyPress = (event) => {
        if(event.key === "Enter"){
            console.log("엔터여~")
            //입력한 검색어를 읽어와서 url을 바꿔준다.
            let keyWord = event.target.value //input안에 있는 값을 읽어오기가능
            navigate(`/?q=${keyWord}`)            
        }


    }
  return (
    <div>

        <div>
            <div className='login-button' onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser}/>
                <div>로그인</div>
            </div>
        </div>


        <div className='nav-section'>
            <img width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png'/>
        </div>


        <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map(item => <li key={item}>{item}</li>)}
                </ul>

                <div className='search-box'>
                    <FontAwesomeIcon icon={faSearch}/>
                    <input type="text" onKeyPress={(event) =>onKeyPress(event)}></input>
                </div>
        </div>

    </div>
  )
}

export default Navbar