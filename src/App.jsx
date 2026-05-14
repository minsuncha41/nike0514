
/*나이키 일반 회원 관리자 관리*/
import "./App.css";
import { useState, useEffect } from "react";
import Nike from "./components/Nike";
import nikelogo from "./assets/nikelogo.png";
import nikeimg1 from "./assets/nikeimg.avif";

export default function App(){
  const[vw, vwSET] = useState("home");
  const[select, selectSET] = useState(null);

  const saveuserDB = localStorage.getItem("userDB");
  const initaluserDB = saveuserDB ? JSON.parse(saveuserDB) : [
    {id:"1234", pw:"1234", name:"손님1"},
    {id:"123", pw:"123", name:"123관리자"},
  ]
  const[userDB, userDBSET] = useState(initaluserDB);


  const savenkDB = localStorage.getItem("nike");
  const initalnkDB = savenkDB ? JSON.parse(savenkDB) : [
    {
      id:1,
      name:"나이키 팬텀 6 로우 아카데미 '엘링 홀란드'",
      tt:"인조 잔디 축구화",
      price:250000,
      imgurl:"https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e651818c-fd88-4def-b2dc-e431519428ec/PHANTOM+6+LOW+ACAD+TF+EH.png"
    },
    {
      id:2,
      name:"나이키 유나이티드 팬텀 6 로우 아카데미",
      tt:"인조 잔디 축구화",
      price:150000,
      imgurl:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b4fca8d3-e06a-4893-b3ad-905bf0fab2d9/PHANTOM+6+LOW+ACAD+TF+NU3.png"
    },
    {
      id:3,
      name:"나이키 티엠포 마에스트로 아카데미",
      tt:"인조 잔디 로우 탑 축구화",
      price:200000,
      imgurl:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ede016c2-672c-4f80-95b2-4767c96c8bec/TIEMPO+MAESTRO+ACADEMY+TF.png"
    },
    {
      id:4,
      name:"나이키 유나이티드 팬텀 6 로우 엘리트",
      tt:"천연 잔디 클리트 축구화",
      price:350000,
      imgurl:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/42c2d7fc-54e5-4a6c-89b4-8677ee3927a0/PHANTOM+6+LOW+ELITE+FG+NU3.png"
    },
    {
      id:5,
      name:"나이키 유나이티드 머큐리얼 슈퍼플라이 10 엘리트",
      tt:"주니어 멀티 그라운드 클리트 축구화",
      price:190000,
      imgurl:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a79183cc-3965-4498-bc45-6602be97499e/ZM+SUPERFLY+10+ELITE+FG+NU3.png"
    },
  ]

  const [nike, nikeSET] = useState(initalnkDB);

  const savedloguser = localStorage.getItem("loginuser");
  const initalloginsuer = savedloguser ? JSON.parse(savedloguser) : null;
  const [loggedinuser, loggedinuserSET] = useState(initalloginsuer);

  useEffect(() => {
    localStorage.setItem("userDB" , JSON.stringify(userDB));
  }, [userDB]);

  useEffect(() => {
    localStorage.setItem("nike" , JSON.stringify(nike));
  }, [nike]);

  useEffect(() => {
    if(loggedinuser){
      localStorage.setItem("loggedinuser" , JSON.stringify(loggedinuser));
    }
    else{
      localStorage.removeItem("loggedinuser")
    }
  },[loggedinuser]);

  const [idinput, setidinput] = useState("");
  const [pwinput, setpwinput] = useState("");
  const [nameinput, setnameinput] = useState("");

  const [newname, setnewname] = useState("");
  const [newtt, setnewtt] = useState("");
  const [newprice, setnewprice] = useState("");
  const [newimg, setnewimg] = useState("");


  const signpu = () => {
    if (!idinput || !pwinput || !nameinput){
      return alert("정보를 모두 입력해주세요!");
    }
    if(userDB.find((u) => u.id === idinput)){
      return alert("이미 존재하는 아이디입니다!")
    }

    userDBSET([...userDB, {id: idinput, pw:pwinput, name:nameinput}]);
    alert("가입완료 로그인 해주세요");

    setidinput("");
    setpwinput("");
    setnameinput("");
    vwSET("login");
  };

  const loginnile = () => {
    const user = userDB.find((u) => u.id === idinput && u.pw === pwinput);
    if(user){
      loggedinuserSET(user);
      setidinput("");
      setpwinput("");

      if(user.id === "123"){
        vwSET("admin");
      }
      else{
        vwSET("home");
      }
    }
    else{
      alert("아이디 또는 비밀번호가 잘못됬습니다");
    }
  };

  const repuirelogin = () => {
    alert("회원특가를 보실려면 로그인후 확인가능합니다");
    vwSET("login")
  }

  const addnike = () => {
    if(!newprice || !newname){
      return alert("상품명과 가격을 입력해주세요!"); 
    }

    const newnike = {
      id: Date.now(),
      name: newname,
      price: newprice,
      tt:newtt,
      imgurl: newimg || "🛠",
    };

    nikeSET([newnike , ...nike]);
    alert("새상품이 등록되었습니다");

    setnewname("");
    setnewtt("");
    setnewprice("");
    setnewimg("");
  }


  const deletepd = (tg) => {
    nikeSET(nike.filter((p) => p.id !== tg));
  };


  const openpopup = (products) => {
    selectSET(products);
  };

  const closepopup = () => {
    selectSET(null);
  };
 



  return(
    <div className="wrap">
      <header className="header">
        <img  className="logo" onClick={() => vwSET("home")} src={nikelogo} alt="" />
        <nav className="topnav">
          <h3 onClick={() => vwSET("home")}>베스트 상품보기</h3>

          {loggedinuser?.id ==="admin" && (
            <span className="admin" onClick={() => vwSET("admin")}>{loggedinuser.name}님의 상품관리</span>
          )}

          {loggedinuser ? (
            <span className="login"  onClick={() => {loggedinuserSET(null); vwSET("home")}}>{loggedinuser.name}님 방갑습니다 로그아웃</span>
          ) : (
            <span className="login" onClick={() => vwSET("login")}>로그인</span>
          )}
        </nav>
      </header>


      <main className="main">

          {vw==="home" && (
            <div className="homewrap">
              <div className="imgs">
                <img src={nikeimg1} alt="" />
              </div>
              <div className="homett">
                <p>축구 / 신발</p>
                <h2 className="sectiontitle">축구 신발</h2>
                <div className="hometts">
                  <span>천연 잔디</span>
                  <span>인공 잔디</span>
                  <span>인조 구장</span>
                  <span>멀티 그라운드</span>
                  <span>실내 코트</span>
                  <span>하드 그라운드</span>
                </div>
                <div className="homesl">
                  <select name="" id=""><option value="">(1)</option></select>
                  <select name="" id=""><option value="">성별</option></select>
                  <select name="" id=""><option value="">키즈</option></select>
                  <select name="" id=""><option value="">할인율</option></select>
                  <select name="" id=""><option value="">키즈 연령</option></select>
                </div>
              </div>
              <div className="productgrid">
                {nike.map((products) => (
                  <Nike
                    key={products.id}
                    prodcut={products}
                    logged={loggedinuser}
                    onrequirelogin={repuirelogin}
                    onopenpopup={openpopup}
                  />
                ))}
              </div>
            </div>
          )}

          {vw==="login" && (
            <div className="loginwrap">
              <h2 className="sectiontitle">NIKE LOGIN</h2>
              <input type="text" 
              placeholder="아이디"
              value={idinput}
              onChange={(e) => setidinput(e.target.value)}
              />
              <input type="password" 
              placeholder="비밀번호"
              value={pwinput}
              onChange={(e) => setpwinput(e.target.value)}
              />
              
              <button className="authbtn blakbtn" onClick={loginnile}>로그인</button>
              <button className="authbtn whitebtn" onClick={() => vwSET("signup")}>회원가입</button>
            </div>
          )}

          {vw==="signup" && (
            <div className="signupewrap">
              <h2 className="sectiontitle">NIKE LOGIN signup</h2>
              <input type="text" 
              placeholder="사용할 별명"
              value={nameinput}
              onChange={(e) => setnameinput(e.target.value)}
              />
              <input type="text" 
              placeholder="사용할 아이디"
              value={idinput}
              onChange={(e) => setidinput(e.target.value)}
              />
              <input type="password" 
              placeholder="비밀번호"
              value={pwinput}
              onChange={(e) => setpwinput(e.target.value)}
              />
              
              <button className="authbtn blakbtn" onClick={signpu}>가입하기</button>
              <button className="authbtn whitebtn" onClick={() => vwSET("login")}>로그인하기</button>
            </div>
          )}

          
          {vw==="admin" && loggedinuser?.id === "123" && (
            <div className="adminwrap">
              <h2 className="sectiontitle">NIKE 관리자 대시보드</h2>
              <div className="adminbox">
                <h3>새 상품 등록하기</h3>
                <input type="text" 
                  placeholder="상품명"
                  value={newname}
                  onChange={(e) => setnewname(e.target.value)}
                />
                <input type="text" 
                  placeholder="상품 설명"
                  value={newtt}
                  onChange={(e) => setnewtt(e.target.value)}
                />
                <input type="number" 
                  placeholder="상품 가격"
                  value={newprice}
                  onChange={(e) => setnewprice(e.target.value)}
                />
                <input type="text" 
                  placeholder="상품 이미지"
                  value={newimg}
                  onChange={(e) => setnewimg(e.target.value)}
                />

                <button className="addprodbtn" onClick={addnike}>상품등록</button>
          
              </div>

              <div className="adminfixbox">
                <h3>등록된 상품관리</h3>
                {nike.map((nk) => (
                  <div className="likebox" key={nk.id}>
                    <img src={nk.imgurl} alt={nk.name} />
                    <p>{nk.name}</p>
                    <p>{nk.tt}</p>
                    <span>정가: ( {nk.price.toLocaleString()}원 ) </span>
                    <span>할인가: ( {(nk.price * 0.9) .toLocaleString()}원 )</span>
                    <button  onClick={() => deletepd(nk.id)}>삭제</button>
                  </div>
                ))
                }
              </div>
            </div>
          )}
      </main>

      {select && (
        <div className="modaloverlay">
          <div className="modalcontent">
            <button className="closebtn" onClick={closepopup}>X</button>
            <img src={select.imgurl} alt={select.name} className="modalimg" />
            <div className="modalinfo">
              <h2>{select.name}</h2>
              <h3>{select.tt}</h3>
              {loggedinuser ? (
                <p className="price sle" >할인가 {(select.price * 0.9).toLocaleString()}원</p>
              ) : (
                <p className="price">{(select.price)}정가</p>
              )
              }
              <button className="bf" onClick={closepopup}>구매하기</button>
            </div>
          </div>
        </div>
        )
      }


      
    </div>

  )

}




/*물건 일반 회원 관리자 로그인
import "./App.css";
import { useState, useEffect } from "react";
import PorductCard from "./components/PorductCard";

export default function App(){
  const [view, setview] =useState("home");
  const[selectpd, setselectPd] = useState(null);

  const saveuserDB = localStorage.getItem("userDB");
  const initaluserDB = saveuserDB ? JSON.parse(saveuserDB) : [
    {id:"1234", pw:"1234", name:"1234관리자"},
    {id:"123", pw:"123", name:"123관리자"},
  ];
  const [userDB, setuserDB] =useState(initaluserDB);

  const savedpds = localStorage.getItem("products");
  const initalpds = savedpds ? JSON.parse(savedpds) : [
    {
      id:1,
      name:"검은콩 흑임자, 32개입",
      price:"20000",
      imgurl:"https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/image_audit/prod/5b4f903c-0abe-4e2f-8b00-67bc15f1c37d_fixing_v2.png"
    },
    {
      id:2,
      name:"구운 쥐포채, 2개",
      price:"10000",
      imgurl:"https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/34937624935030-58c8fbc4-87e4-4328-a83b-86f07f26d277.jpg"
    },
    {
      id:3,
      name:"자몽 에이드 탄산, 24개",
      price:"35000",
      imgurl:"https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/c39b/1ef49ea4a9591821ae81e0ad44915f3975a1cc9df44707e5875085422f09.jpg"
    },
    {
      id:4,
      name:"파워에이드 마운틴 블라스트, 12개",
      price:"15000",
      imgurl:"https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/5391563659701-787f45d3-a3e9-481a-8244-e8e8cba40c39.jpg"
    },
    {
      id:5,
      name:"한우 A++, 한우 선물 세트, 구이용 최상급",
      price:"70000",
      imgurl:"https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/9b80/fff6ad2ea67853a170f4aa6ea4b0fd6b38d2816b28389fbbd9cf9f0fc385.png"
    },

  ];
  const [products, setporducts] = useState(initalpds);

  const savedloginuser = localStorage.getItem("loginuser");
  const initalloginuser = savedloginuser ? JSON.parse(savedloginuser) : null;
  const [loggedinuser, setloggedinuser] = useState(initalloginuser);

  useEffect(() => {
    localStorage.setItem("userDB" , JSON.stringify(userDB));
  }, [userDB]);

  useEffect(() => {
    localStorage.setItem("products" , JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    if(loggedinuser){
      localStorage.setItem("loggedinuser" , JSON.stringify(loggedinuser));
    }
    else{
      localStorage.removeItem("loggedinuser")
    }
  }, [loggedinuser]);


  const [idinput, setidinput] = useState("");
  const [pwinput, setpwinput] = useState("");
  const [nameinput, setnameinput] = useState("");

  const [newpdname, setnewpdname] = useState("");
  const [newpdprice, setnewpdprice] = useState("");
  const [newpdimg, setnewpdimg] = useState("");

  

  const signpu = () => {
    if (!idinput || !pwinput || !nameinput){
      return alert("정보를 모두 입력해주세요!");
    }
    if(userDB.find((u) => u.id === idinput)){
      return alert("이미 존재하는 아이디입니다!")
    }

    setuserDB([...userDB, {id: idinput, pw:pwinput, name:nameinput}]);
    alert("가입완료 로그인 해주세요");

    setidinput("");
    setpwinput("");
    setnameinput("");
    setview("login")
  };


  const login = () => {
    const user = userDB.find((u) => u.id === idinput && u.pw === pwinput);
    if(user){
      setloggedinuser(user);
      setidinput("");
      setpwinput("");

      if(user.id === "123"){
        setview("admin");
      }
      else{
        setview("home");
      }
    }
    else{
      alert("아이디 또는 비밀번호가 잘못됬습니다");
    }
  };

  const repuirelogin = () => {
    alert("회원특가를 보실려면 로그인후 확인가능합니다");
    setview("login")
  }


  const addproduct = () => {
    if(!newpdname || !newpdprice){
      return alert("상품명과 가격을 입력해주세요!"); 
    }

    const newproduct = {
      id: Date.now(),
      name: newpdname,
      price: newpdprice,
      imgurl: newpdimg || "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/130939807003278-7960ed27-3ef1-49a8-9df1-dcf276aef1cd.jpg",
    };

    setporducts([newproduct , ...products]);
    alert("새상품이 등록되었습니다");

    setnewpdname("");
  }

  const deletepd = (tg) => {
    setporducts(products.filter((p) => p.id !== tg));
  };


  const openpopup = (products) => {
    setselectPd(products);
  };

  const closepopup = () => {
    setselectPd(null);
  };



    return(
      <div className="appwrap">
        <header className="header">
          <h1 className="logo" onClick={() => setview("home")}>ACT SHOP</h1>
          <nav className="topnav">
            <span className="navitem" onClick={() => setview("home")}>BEST ITEM</span>

            {loggedinuser?.id === "admin" && (
              <span className="navitem admintg" onClick={() => setview("admin")}>상품관리</span>
            )}

            {loggedinuser ? (
              <span className="navitem" onClick={() => {setloggedinuser(null) ; setview("home")}}>LOGOUT</span>
            ) : (
              <span className="navitem" onClick={() => setview("login")}>LOGIN</span>
            )
            }
          </nav>
        </header>

        <main className="maincontent">
          {view === "home" && (
            <div className="homeview">
              <h2 className="sectiontitle">BEST ITEMS</h2>
              <div className="productgrid">
                {products.map((products) => (
                  <PorductCard
                    key={products.id}
                    prodcut={products}
                    islogged={loggedinuser}
                    onrequirelogin={repuirelogin}
                    onopenpopup={openpopup}
                  />
                ))}
              </div>
            </div>
          )}


          {view === "login" && (
            <div className="authcontainer">
              <h2 className="authtitle">MEMBER LOGIN</h2>
              <input type="text" 
                placeholder="ID"
                value={idinput}
                onChange={(e) => setidinput(e.target.value)}
                className="authinput"
               />
              <input type="password" 
                placeholder="PW"
                value={pwinput}
                onChange={(e) => setpwinput(e.target.value)}
                className="authinput"
               />
               <button className="authbtn blakbtn" onClick={login}>로그인</button>
               <button className="authbtn whitebtn" onClick={() => setview("signup")}>회원가입</button>

            </div>
          )}

          {view === "signup" && (
            <div className="authcontainer">
              <h2 className="authtitle">LOGIN US</h2>
              <input type="text" 
                placeholder="ID"
                value={idinput}
                onChange={(e) => setidinput(e.target.value)}
                className="authinput"
               />
              <input type="password" 
                placeholder="PW"
                value={pwinput}
                onChange={(e) => setpwinput(e.target.value)}
                className="authinput"
               />
              <input type="text" 
                placeholder="NAME"
                value={nameinput}
                onChange={(e) => setnameinput(e.target.value)}
                className="authinput"
               />

               <button className="authbtn blakbtn" onClick={signpu}>가입하기</button>
               <button className="authbtn whitebtn" onClick={() => setview("login")}>취소</button>            
            </div>
          )} 


          {view === "admin" && loggedinuser?.id === "123" && (
            <div className="authcontainer">
              <h2 className="authtitle">관리자 대시보드</h2>

              <div className="admininputbox">
                <h3>새 상품 등록하기</h3>
                <input type="text" 
                  placeholder="상품명"
                  value={newpdname}
                  onChange={(e) => setnewpdname(e.target.value)}
                />
                <input type="number" 
                  placeholder="상품 가격"
                  value={newpdprice}
                  onChange={(e) => setnewpdprice(e.target.value)}
                />
                <input type="text" 
                  placeholder="상품 이미지"
                  value={newpdimg}
                  onChange={(e) => setnewpdimg(e.target.value)}
                />

                <button className="addprodbtn" onClick={addproduct}>상품등록</button>
          
              </div>

              <div className="adminlistbox">
                <h3>등록된 상품 관리</h3>
                {products.map((product) => (
                  <div className="adminlistitem" key={product.id}>
                    <img src={product.imgurl} alt="name" />
                    <span>{product.name} ({product.price.toLocaleString()}원)</span>
                  <button  onClick={() => deletepd(product.id)}>삭제</button>
                  </div>
                )) }
              </div>

            </div>
          )}
        </main>

        {selectpd && (
          <div className="modaloverlay"
          onClick={closepopup}>
            <div className="modalcontent" onClick={(e) => e.stopPropagation()}>
              <button className="closebtn" onClick={closepopup}>X</button>
              <img src={selectpd.imgurl} alt={selectpd.name} className="modalimg" />
              <div className="modalinfo">
                <h2>{selectpd.name}</h2>
                {loggedinuser ? (
                  <p className="price sle" >{(selectpd.price * 0.9).toLocaleString()}원</p>
                ) : (
                  <p className="price">{(selectpd.price)}정가</p>
                )
                }
                <button className="bf">구매하기</button>
              </div>
            </div>
          </div>
        )
          
        }



      </div>
    )


}
*/






/*스포츠관리 
import "./App.css";
import { useState } from "react";
import spclogin from "./components/spclogin";

export default function App(){


  const[view, setview] = useState("main");
  const[logged, setlogged] = useState(null);
  const[userDB, setuserDB] = useState([
    {
      id:"123",
      pw:"123",
      names:"cha123"
    },
    {
      id:"000",
      pw:"000",
      names:"cha000"
    },
  ]);

  const[idinput, setidinput] = useState("");
  const[pwinput, setpwinput] = useState("");
  const[nameinput, setnameinput] = useState("");

  const[name, setname] = useState("");
  const[date, setdate] = useState("");
  const[jm, setjm] = useState("");

  const[spclist, setspclist] =useState([
    {
      id:1,
      name:"차민성",
      date:"2026-04-24",
      jm:"축구",
      done:false
    },
    {
      id:2,
      name:"이진성",
      date:"2026-02-14",
      jm:"농구",
      done:false
    },
  ]);



  const signup = () => {
    if(!idinput || !pwinput || !nameinput) return alert("모든칸 입력해주세요!");
    
    const isexist = userDB.find((user) => user.id === idinput);
    if (isexist) return alert("이미 존재하는 아이디입니다!");  
    
    const newuser = {
      id: idinput,
      pw: pwinput,
      names: nameinput,
    }
    setuserDB([...userDB, newuser]);

    alert("회원가입성공 로그인 해주세요");
    setidinput(""); setpwinput(""); setnameinput("");
    setview("login");
  };

  const login = () => {
    const user = userDB.find((u) => u.id === idinput && u.pw === pwinput);

    if(user){
      setlogged(user);
      setidinput(""); setpwinput("");
      setview("main");
    }
    else{
      alert("아이디, 비밀번호 잘못입력");
    }
  };

  const logout = () => {
    setlogged(null);
    alert("로그아웃완료");
  };

  const addspc = () => {
    if(!name || !date || !jm) return;
    const newspc = {
      id: Date.now(),
      date:date,
      name:name,
      jm:jm,
      done:false
    }
    setspclist([newspc, ...spclist]);
    setnameinput("");
  };

  const deletespc = (tg) => {
    setspclist(spclist.filter((spc) => spc.id !== tg));
  };

  return(
    <div className="wrap">
      <div className="header">
        <div className="logo">
           <h2>KSPO&CO<span>한국체육산업개발주식회사</span></h2>
           <p><span>KSPO&CO</span>케이스포앤코</p>
           <div className="loginbox">
            {logged ? (
              <>
                <span className="welcom">{logged.names} 관리자님 환영합니다!</span>
                <button className="logout" onClick={logout}>로그아웃</button>
              </>
            ) : (
                <button className="login" onClick={() => setview("login")}>로그인</button>
            )}
           </div>
        </div>
      </div>

      {view === "main" && (
        <div className="spcview">
          <div className="inputbox">
            <div className="inputs">
              이름:
              <input type="text" 
              placeholder="이름입력"
              value={name}
              onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="inputs">
              종목:
              <input type="text" 
              placeholder="종목입력"
              value={jm}
              onChange={(e) => setjm(e.target.value)}
              />
            </div>
            <div className="inputs">
              가입일:
              <input type="date"
              value={date}
              onChange={(e) => setdate(e.target.value)}
              />
            </div>
            <button className="addbtn" onClick={addspc}>등록</button>
          </div>

          <div className="board">
            {spclist.map((spc) => (
              <spclogin 
              key={spc.id}
              date={spc}
              ondelete={deletespc}
              loggined={logged}
              />
            ))}
          </div>
        </div>
      )}

      {view === "login" && (
        <div className="authbox">
          <h3>관리자 로그인</h3>

          <div className="inputs">
            아이디:
            <input type="text" 
            placeholder="아이디 입력"
            value={idinput}
            onChange={(e) => setidinput(e.target.value)}
            />
          </div>
          <div className="inputs">
            비밀번호:
            <input type="password" 
            placeholder="비밀번호 입력"
            value={pwinput}
            onChange={(e) => setpwinput(e.target.value)}
            />
          </div>
          <button className="primarybtn" onClick={login}>로그인</button>

          <div className="auth">
            <button className="textbtn" onClick={()=> setview("signup")}>관리자 등록</button>
            <button className="textbtn" onClick={()=> setview("main")}>메인으로 돌아가기</button>
          </div>
        </div>
      )}

  
      {view === "signup" && (
        <div className="authbox">
          <h3>관리자 등록 (회원가입)</h3>
          <div className="inputs">
            사용할 별명:
            <input type="text" 
            placeholder="별명 입력"
            value={name}
            onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="inputs">
            사용할 아이디:
            <input type="text" 
            placeholder="아이디 입력"
            value={idinput}
            onChange={(e) => setidinput(e.target.value)}
            />
          </div>
          <div className="inputs">
            사용할 비밀번호:
            <input type="password" 
            placeholder="비밀번호 입력"
            value={pwinput}
            onChange={(e) => setpwinput(e.target.value)}
            />
          </div>

          <button className="primarybtn" onClick={signup}>등록 완료</button>
          <button className="textbtn" onClick={()=> setview("login")}>로그인으로 돌아가기</button>
        </div>
      )}    
    </div>

  )
}
*/


/* 투두리스트0511
import "./App.css";
import { useState } from "react";
import Todoit0511 from "./components/Todoit0511";

export default function App(){  
  const [Currentview, setCurrentview] = useState("todo");
  const [Loggedinuser, setLoggedinuser] = useState(null);
  const [Userdb, setUserdb] = useState([
    { id: "1234", pw:"1234", name: "민1234" },
    { id: "0000", pw:"0000", name: "민0000" },
  ]);

  const [Inputid, setInputid] = useState("");
  const [Inputpw, setInputpw] = useState("");
  const [Inputname, setInputname] = useState("");

  const [Todotext, setTodotext] = useState("");
  const [Todolist, setTodolist] = useState([
    { id:1, text: "리엑트 투두리스트 관리자 모드 만들기", isDone: false}
  ]);
  
  const handlesignup = () => {
    if(!Inputid || !Inputname || !Inputpw) return alert("모든칸 입력해주세요!");
    
    const isexist = Userdb.find((user) => user.id === Inputid);
    if (isexist) return alert("이미 존재하는 아이디입니다!");

    const newuser = {id: Inputid, pw: Inputpw, name:Inputname};
    setUserdb([...Userdb, newuser]);

    alert("회원가입 성공 로그인해주세요");
    setInputid(""); setInputname(""); setInputpw("");
    setCurrentview("login");
  } 

  const handlelogin = () => {
    const user = Userdb.find((u) => u.id === Inputid && u.pw === Inputpw);
    if(user){
      setLoggedinuser(user);
      setInputid(""); setInputpw("");
      setCurrentview("todo");
      
    }
    else{
      alert("아이디나 비밀번호가 틀렸습니다");
    }
  }

  const handlelogout = () =>{
    setLoggedinuser(null);
    alert("로그아웃 되었습니다")
  }



  const addtodo = () => {
    if(!Todotext) return;
    const newtodo = {id: Date.now(), text: Todotext, isDone: false};
    setTodolist([...Todolist, newtodo]);
    setTodotext("");
  };

  const deletetodo = (tg) => {
    setTodolist(Todolist.filter((todo)=> todo.id !== tg));
  };

  return(
    <div className="appwrap">
      <div className="header">
        <h2>모두의 할 일 관리</h2>
        <div className="authmeun">
          {Loggedinuser ? (
            <>
              <span className="welcomemsg">{Loggedinuser.name} 관리자님 환영합니다</span>
              <button className="logoutbtn" onClick={handlelogout}>로그아웃</button>
            </>
          ): (
            <button className="loginnavbtn" onClick={() => setCurrentview("login")}>로그인</button>
          )}
        </div>
      </div>

      {Currentview === "todo" && (
        <div className="viewcontainer">
          <div className="inputbox">
            <input type="text" 
              placeholder="새로운할일 작성"
              value={Todotext}
              onChange={(e) => setTodotext(e.target.value)}
            />
            <button className="addbtn" onClick={addtodo}>등록</button>
          </div>



          <div className="todoboard">
            {Todolist.map((todo) => (
                <Todoit0511
                key={todo.id}
                data={todo}
                ondelete={deletetodo}
                isloggedin={Loggedinuser}
                />
              ))}
          </div>
        </div>
      )}

      {Currentview === "login" && (
        <div className="authbox">
          <h3>관리자 로그인</h3>
          <input type="text" 
            placeholder="아이디"
            value={Inputid}
            onChange={(e) => setInputid(e.target.value)}
          />
            <input type="password" 
            placeholder="비밀번호"
            value={Inputpw}
            onChange={(e) => setInputpw(e.target.value)}
          />        
          <button className="primarybtn" onClick={handlelogin}>로그인</button>

          <div className="authlinks">
            <span>아직 회원이 아니신가요</span>
            <button className="textbtn" onClick={()=> setCurrentview("signup")}>회원가입 하기</button>
            <button className="textbtn" onClick={()=> setCurrentview("todo")}>메인으로 돌아가기</button>
          </div>
        </div>
      )}


      {Currentview === "signup" &&(
        <div className="authbox">
          <h3>관리자 등록 (회원가입)</h3>
          <input type="text" 
            placeholder="원하는 아이디"
            value={Inputid}
            onChange={(e) => setInputid(e.target.value)}
          />
            <input type="password" 
            placeholder="원하는 비밀번호"
            value={Inputpw}
            onChange={(e) => setInputpw(e.target.value)}
          />  
          <input type="text" 
            placeholder="당신의 이름"
            value={Inputname}
            onChange={(e) => setInputname(e.target.value)}
          />
          <button className="primarybtn" onClick={handlesignup}>가입하기</button>
          <button className="textbtn mt10" onClick={()=> setCurrentview("login")}>뒤로가기</button>
        </div>
      )
      }
    </div>
  )
}
*/



/* 카페24edit 
import "./App.css"
import { useState } from 'react';
import Cafe24 from'./components/Cafe24edit22';

import con1 from './assets/cafe24/con2-1.jpg'
import con11 from './assets/cafe24/con2-11.jpg'

import con2 from './assets/cafe24/con2-2.jpg'
import con22 from './assets/cafe24/con2-22.jpg'

import con3 from './assets/cafe24/con2-3.jpg'
import con33 from './assets/cafe24/con2-33.jpg'

import con4 from './assets/cafe24/con2-4.jpg'
import con44 from './assets/cafe24/con2-44.jpg'

import con5 from './assets/cafe24/con2-5.jpg'
import con55 from './assets/cafe24/con2-55.jpg'

import con6 from './assets/cafe24/con2-6.jpg'
import con66 from './assets/cafe24/con2-66.jpg'


export default function App(){
  const [slt, setslt] = useState(null);


  const [name, setname] = useState("");
  const [money, setmoney] = useState("");
  const [dc, setdc] = useState("");
  const [dcmoney, setdcmoney] = useState("");
  const [imgs, setimgs] = useState("");
  const [imghv, setimghv] = useState("");  
  const [cl1, setcl1] = useState("");
  const [cl2, setcl2] = useState("");
  const [cl3, setcl3] = useState("");
  const [text, settext] = useState("");

  const addcafe = () => {
    if(!name || !money  || !money  || !money  || !money  || !money  || !money ){
      alert("재고명을 적어주세요!");
      return;
    }

    const newcafe = {
      id: Date.now(),
      name: name,

    }

    setcafelist([newcafe, ...cafelist]);
    setname("");
  }
  


  const date = 
  [
    {
      id:1,
      name: "시간을 걷는 스마트위치",
      //text: "aaaaaaaa",
      money: "33,000원",
      dc:"9%",
      dcmoney:"30,000원",
      img: con1, 
      imghv: con11,
      cl1: 'on',
      cl2: 'on',
      cl3: ''
    },
    {
      id:2,
      name: "클라우디 사운드 헤드셋",
      text: "누구나 사용하실 수 있는 편리한 디자인을 제작합니다",
      money: "70,000원",
      dc:"20%",
      dcmoney:"56,000원",
      img: con2, 
      imghv: con22,
      cl1: 'on',
      cl2: '',
      cl3: ''
    },
    {
      id:3,
      name: "제로 그램 테이블",
      text: "눈을 사로잡기보다 쓰임에 집중했습니다.",
      money: "62,000원",
      dc:"23%",
      dcmoney:"48,000원",
      img: con3, 
      imghv: con33,
      cl1: '',
      cl2: 'on',
      cl3: ''
    },
    {
      id:4,
      name: "화이트 모먼트 사운드팟",
      text: "이건 그냥 예쁘기만 한 웹이 아닙니다.",
      money: "39,000원",
      dc:"26%",
      dcmoney:"29,000원",
      img: con4, 
      imghv: con44,
      cl1: 'on',
      cl2: 'on',
      cl3: ''
    },
    {
      id:5,
      name: "데일리 스마트 디바이스",
      text: "디자인은 심플해도 완성도는 복잡하게 따졌습니다.",
      money: "50,000원",
      dc:"10%",
      dcmoney:"45,000원",
      img: con5, 
      imghv: con55,
      cl1: 'on',
      cl2: 'on',
      cl3: 'on'
    },
    {
      id:6,
      name: "말랑민트 메시 체어",
      text: "디자인 퀄리티는 높게 수정은 쉽게",
      money: "87,000원",
      dc:"14%",
      dcmoney:"75,000원",
      img: con6, 
      imghv: con66,
      cl1: 'on',
      cl2: '',
      cl3: 'on'
    },
    {
      id:1,
      name: "시간을 걷는 스마트위치",
    //      text: "aaaaaaaa",
      money: "33,000원",
      dc:"9%",
      dcmoney:"30,000원",
      img: con1, 
      imghv: con11,
      cl1: 'on',
      cl2: 'on',
      cl3: ''
    },
    {
      id:2,
      name: "클라우디 사운드 헤드셋",
      text: "누구나 사용하실 수 있는 편리한 디자인을 제작합니다",
      money: "70,000원",
      dc:"20%",
      dcmoney:"56,000원",
      img: con2, 
      imghv: con22,
      cl1: 'on',
      cl2: '',
      cl3: ''
    },
    {
      id:3,
      name: "제로 그램 테이블",
      text: "눈을 사로잡기보다 쓰임에 집중했습니다.",
      money: "62,000원",
      dc:"23%",
      dcmoney:"48,000원",
      img: con3, 
      imghv: con33,
      cl1: '',
      cl2: 'on',
      cl3: ''
    },
    {
      id:4,
      name: "화이트 모먼트 사운드팟",
      text: "이건 그냥 예쁘기만 한 웹이 아닙니다.",
      money: "39,000원",
      dc:"26%",
      dcmoney:"29,000원",
      img: con4, 
      imghv: con44,
      cl1: 'on',
      cl2: 'on',
      cl3: ''
    },
    {
      id:5,
      name: "데일리 스마트 디바이스",
      text: "디자인은 심플해도 완성도는 복잡하게 따졌습니다.",
      money: "50,000원",
      dc:"10%",
      dcmoney:"45,000원",
      img: con5, 
      imghv: con55,
      cl1: 'on',
      cl2: 'on',
      cl3: 'on'
    },
    {
      id:6,
      name: "말랑민트 메시 체어",
      text: "디자인 퀄리티는 높게 수정은 쉽게",
      money: "87,000원",
      dc:"14%",
      dcmoney:"75,000원",
      img: con6, 
      imghv: con66,
      cl1: 'on',
      cl2: '',
      cl3: 'on'
    },
  ]



  return(
    <div className="wrap">
      <h1>베스트 상품</h1>
      <p>가장 사랑받은 아이템들</p>
      <div className="box">
        {date.map((it)=>(
          <Cafe24
            key={it.id}
            {...it}
            slt={slt}
            setslt={setslt}
          />
        ))}
      </div>
    </div>
  )

}
*/


/* 카페24
import "./App.css"
import { useState } from 'react';
import Cafe24 from'./components/Cafe24edit22';

import con1 from './assets/cafe24/con2-1.jpg'
import con11 from './assets/cafe24/con2-11.jpg'

import con2 from './assets/cafe24/con2-2.jpg'
import con22 from './assets/cafe24/con2-22.jpg'

import con3 from './assets/cafe24/con2-3.jpg'
import con33 from './assets/cafe24/con2-33.jpg'

import con4 from './assets/cafe24/con2-4.jpg'
import con44 from './assets/cafe24/con2-44.jpg'

import con5 from './assets/cafe24/con2-5.jpg'
import con55 from './assets/cafe24/con2-55.jpg'

import con6 from './assets/cafe24/con2-6.jpg'
import con66 from './assets/cafe24/con2-66.jpg'


export default function App(){
  const [slt, setslt] = useState(null);

  const date = 
  [
    {
      id:1,
      name: "시간을 걷는 스마트위치",
    //text: "aaaaaaaa",
      money: "33,000원",
      dc:"9%",
      dcmoney:"30,000원",
      img: con1, 
      imghv: con11,
      cl1: 'on',
      cl2: 'on',
      cl3: ''
    },
    {
      id:2,
      name: "클라우디 사운드 헤드셋",
      text: "누구나 사용하실 수 있는 편리한 디자인을 제작합니다",
      money: "70,000원",
      dc:"20%",
      dcmoney:"56,000원",
      img: con2, 
      imghv: con22,
      cl1: 'on',
      cl2: '',
      cl3: ''
    },
    {
      id:3,
      name: "제로 그램 테이블",
      text: "눈을 사로잡기보다 쓰임에 집중했습니다.",
      money: "62,000원",
      dc:"23%",
      dcmoney:"48,000원",
      img: con3, 
      imghv: con33,
      cl1: '',
      cl2: 'on',
      cl3: ''
    },
    {
      id:4,
      name: "화이트 모먼트 사운드팟",
      text: "이건 그냥 예쁘기만 한 웹이 아닙니다.",
      money: "39,000원",
      dc:"26%",
      dcmoney:"29,000원",
      img: con4, 
      imghv: con44,
      cl1: 'on',
      cl2: 'on',
      cl3: ''
    },
    {
      id:5,
      name: "데일리 스마트 디바이스",
      text: "디자인은 심플해도 완성도는 복잡하게 따졌습니다.",
      money: "50,000원",
      dc:"10%",
      dcmoney:"45,000원",
      img: con5, 
      imghv: con55,
      cl1: 'on',
      cl2: 'on',
      cl3: 'on'
    },
    {
      id:6,
      name: "말랑민트 메시 체어",
      text: "디자인 퀄리티는 높게 수정은 쉽게",
      money: "87,000원",
      dc:"14%",
      dcmoney:"75,000원",
      img: con6, 
      imghv: con66,
      cl1: 'on',
      cl2: '',
      cl3: 'on'
    },
    {
      id:1,
      name: "시간을 걷는 스마트위치",
//      text: "aaaaaaaa",
      money: "33,000원",
      dc:"9%",
      dcmoney:"30,000원",
      img: con1, 
      imghv: con11,
      cl1: 'on',
      cl2: 'on',
      cl3: ''
    },
    {
      id:2,
      name: "클라우디 사운드 헤드셋",
      text: "누구나 사용하실 수 있는 편리한 디자인을 제작합니다",
      money: "70,000원",
      dc:"20%",
      dcmoney:"56,000원",
      img: con2, 
      imghv: con22,
      cl1: 'on',
      cl2: '',
      cl3: ''
    },
    {
      id:3,
      name: "제로 그램 테이블",
      text: "눈을 사로잡기보다 쓰임에 집중했습니다.",
      money: "62,000원",
      dc:"23%",
      dcmoney:"48,000원",
      img: con3, 
      imghv: con33,
      cl1: '',
      cl2: 'on',
      cl3: ''
    },
    {
      id:4,
      name: "화이트 모먼트 사운드팟",
      text: "이건 그냥 예쁘기만 한 웹이 아닙니다.",
      money: "39,000원",
      dc:"26%",
      dcmoney:"29,000원",
      img: con4, 
      imghv: con44,
      cl1: 'on',
      cl2: 'on',
      cl3: ''
    },
    {
      id:5,
      name: "데일리 스마트 디바이스",
      text: "디자인은 심플해도 완성도는 복잡하게 따졌습니다.",
      money: "50,000원",
      dc:"10%",
      dcmoney:"45,000원",
      img: con5, 
      imghv: con55,
      cl1: 'on',
      cl2: 'on',
      cl3: 'on'
    },
    {
      id:6,
      name: "말랑민트 메시 체어",
      text: "디자인 퀄리티는 높게 수정은 쉽게",
      money: "87,000원",
      dc:"14%",
      dcmoney:"75,000원",
      img: con6, 
      imghv: con66,
      cl1: 'on',
      cl2: '',
      cl3: 'on'
    },
  ]



  return(
    <div className="wrap">
      <h1>베스트 상품</h1>
      <p>가장 사랑받은 아이템들</p>
      <div className="box">
        {date.map((it)=>(
          <Cafe24
            key={it.id}
            {...it}
            slt={slt}
            setslt={setslt}
          />
        ))}
      </div>
    </div>
  )

}

*/


/* 카페 재고관리
import "./App.css";
import { useState } from "react";
import Cafe0508 from "./components/Cafe0508";

import ii from "./assets/ii05081.jpg"
import sb from "./assets/ii05082.jpg"
import dg from "./assets/ii05083.jpg"
import mc from "./assets/ii05084.jpg"

export default function App(){
  const [name, setname] = useState("");
  const [imgurl, setimgurl] = useState(ii);
  const [jl, setjl] = useState("커피");
  const [num, setnum] = useState(100);
  
  const [cafelist, setcafelist] = useState([
    {
      id: 1,
      name: "아이스아메리카노",
      imgurl: ii,
      jl: "커피",
      num: 100,
      outnum: 20,
      tt: "간 얼음 많이 샷추가"
    },
    {
      id: 2,
      name: "수박주스",
      imgurl: sb,
      jl: "수박",
      num: 100,
      outnum: 50,
      tt: "얼음 많이"
    },
  ]);

  const addcafe0508 = () => {
    if(!name){
      alert("재고명을 적어주세요!");
      return;
    }

    const newcafe = {
      id: Date.now(),
      name: name,
      imgurl: imgurl,
      jl: jl,
      num: Number(num),
      outnum: 0,
      tt: ""
    }

    setcafelist([newcafe, ...cafelist]);
    setname("");
  }

  const deletecafe = (tg) => {
    setcafelist(cafelist.filter((cf) => cf.id !== tg));
  }

  const updatetexts = (tg, newtexts , newname ,newimgurl, newjl, newnum, newoutnum) => {
    setcafelist(cafelist.map((cf) => {
      if(cf.id === tg) {
        return {...cf, name: newname};
        return {...cf, imgurl: newimgurl};
        return {...cf, jl: newjl};
        return {...cf, num: newnum};
        return {...cf, outnum: newoutnum};
        return {...cf, tt: newtexts};
      }
      return cf;
    }));
  };

  // const updatetexts = (tg, newtexts) => {
  //   setcafelist(cafelist.map((cf) => {
  //     if(cf.id === tg) {
  //       return {...cf, tt: newtexts};
  //     }
  //     return cf;
  //   }));
  // };

  return(
    <div className="wrap">
      <h2>☕ 커피 메뉴 && 재고관리 ☕</h2>

      <div className="inputbox">

        <input type="text"
        placeholder="재고명을 입력해주세요"
        value={name}
        onChange={(e) => setname(e.target.value)}
        />



        <select value={imgurl} onChange={(e) => setimgurl(e.target.value)}>
          <option value={ii}>커피 이미지</option>
          <option value={sb}>수박주스 이미지</option>
          <option value={dg}>딸기라떼 이미지</option>
          <option value={mc}>말차라떼 이미지</option>
        </select>

        <select value={jl} onChange={(e) => setjl(e.target.value)}>
          <option value="커피">커피</option>
          <option value="수박">수박</option>
          <option value="딸기">딸기</option>
          <option value="말차">말차</option>
        </select>

        
        <input type="number"
        placeholder="재고수량을 입력해주세요"
        value={num}
        onChange={(e) => setnum(e.target.value)}
        />

        <button onClick={addcafe0508}>재고 추가</button>
      </div>

      <div className="board">
        {
          cafelist.map((cf)=>(
            <Cafe0508 
            key={cf.id}
            data={cf}
            onupupdatetexts={updatetexts}
            ondeletecafe={deletecafe}
            />
          ))
        }
      </div>

    </div>
  );
}
*/


/* 매점 관리 프로그램 
import "./App.css";
import { useState } from "react";
import MJ from "./components/MJ";

export default function App(){
  const [name, setname] = useState("");
  const [imgsurl, setimgsurl] = useState("");
  const [quantity, setquantity] = useState("");
  const [money, setmoney] = useState("");
  const [message, setmessage] = useState("");

  const [mjlisst, setmjlist] = useState([
    {
      id:1,
      name:"맛있고 고소한 참깨라면",
      imgsurl:"https://th.bing.com/th/id/OIP.A10A8q-wduXkMbYPSjbZsgHaHa?w=184&h=184&c=7&r=0&o=7&pid=1.7&rm=3",
      quantity:15,
      outquantity:5,
      money:1500,
      message:"계란이 들어가있어 알레르기 조심"
    },
  ])

  const addmj = () => {
    if(!name || !quantity || !money ){
      alert("상품 이름과 가격, 수량을 적어주세요");
      return;
    }

    const newmj = {
      id: Date.now,
      name: name,
      imgsurl: imgsurl,
      quantity:Number(quantity),
      outquantity: 0,
      money: 0,
      message: message
    }

    setmjlist([newmj, ...mjlisst]);
    setname("");
    setimgsurl("");
    setquantity("");
    setmoney("");

    setmessage("");
  }

  const dleletemj = (tg) => {
    setmjlist(mjlisst.filter((mj) => mj.id !== tg));
  }

  const updatequantity = (tg, out) => {
    setmjlist(mjlisst.map((mj) => {
      if(mj.id === tg){
        const newdatequantity = Math.min(mj.quantity, mj.outquantity + Number(out));
        return{...mj, outquantity: newdatequantity};
      }
      return mj;
    }));
  };

  const updatemessage = (tg, newmessage) => {
    setmjlist(mjlisst.map((mj) => {
      if(mj.id === tg){
        return{...mj, message: newmessage};
      }
      return mj;
    }));
  };



  return(
    <div className="wrap">
      <h2>💻 매점 관리 프로그램 💻</h2>
      <div className="inputbox">

        <input type="text" 
        placeholder="상품명"
        value={name}
        onChange={(e) => setname(e.target.value)}
        />
        
        <input type="text" 
        placeholder="상품이미지(선택)"
        value={imgsurl}
        onChange={(e) => setimgsurl(e.target.value)}
        />
        
        <input type="number" 
        placeholder="총 수량"
        value={quantity}
        onChange={(e) => setquantity(e.target.value)}
        />
        
        <input type="text" 
        placeholder="가격"
        value={money}
        onChange={(e) => setmoney(e.target.value)}
        />
        
        <div className="msgbox">
          <input type="text" 
          className="msg"
          placeholder="전달사항"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          />
        </div>


        <button onClick={addmj}>등록하기</button>
      </div>
      <div className="mjbox">
        {mjlisst.map((mj) => (
          <MJ 
          key={mj.id} 
          data={mj}
          dleletemj={dleletemj}
          updatequantity={updatequantity} 
          updatemessage={updatemessage}
          />
        ))}
      </div>
    </div>
  )



}
*/



/*  독서 기록장 
import "./App.css";
import { useState } from "react";
import BookCard from "./components/BookCard";

export default function App(){
  const[title, settitle] = useState("");
  const[imgUrl, setimgUrl] = useState("");
  const[totalPages, settotalPages] = useState("");

  const[booklist, setbookList] = useState([
    {
      id: 1,
      title: "어린왕자",
      imgUrl: "https://th.bing.com/th/id/OIP.HeNMBvedyyVAXFbrwgT1uAAAAA?w=186&h=285&c=7&r=0&o=7&pid=1.7&rm=3",
      totalPages: 150,
      readPages: 45,
      review: "여우와의 대화가 참 따뜻하다"
    }
  ]);

  // 책추가하기 부분
  const addBook = () => {
    if(!title || !totalPages){
      alert("책 제목과 총 페이지를 적어주세요!");
      return;
    }

    const newBook = {
      id: Date.now(),
      title: title,
      imgUrl: imgUrl,
      totalPages:Number(totalPages),
      readPages:0,
      review: ""
    };

    setbookList([newBook, ...booklist]);
    settitle(""); settotalPages(""); setimgUrl("");
  };

  // 책 삭제하기 부분
  const deleteBook = (tg) => {
    setbookList(booklist.filter((book) => book.id !== tg));
  }


  // 책페이지
  const updateReadPages = (tg, rede) => {
    setbookList(booklist.map((book) => {
      if(book.id === tg){
        const newReadPages = Math.min(book.totalPages, book.readPages + Number(rede));
        return{...book, readPages: newReadPages};
      }
      return book
    }));
  };


  //독후감
  const updateReview = (tg , newreview) => {
    setbookList(booklist.map((book) => {
      if(book.id === tg) {
        return {...book, review: newreview};
      }
      return book;
    }));
  };



  return(
    <div className="wrap">
      <h2>나의 독서 기록장</h2>

      <div className="inputbox">
        <input type="text"
        placeholder="책 제목"
        value={title}
        onChange={(e) => settitle(e.target.value)}
        />

        <input type="text"
        placeholder="이미지 URL(선택)"
        value={imgUrl}
        onChange={(e) => setimgUrl(e.target.value)}
        />

        <input type="number"
        placeholder="총 페이지 수"
        value={totalPages}
        onChange={(e) => settotalPages(e.target.value)}
        />

        <button onClick={addBook}>등록하기</button>

      </div>
      <div className="board">
        {booklist.map((book) => (
          <BookCard 
          key={book.id} 
          data={book}
          onUpdatePages={updateReadPages}
          ondateReview={updateReview} 
          onDlete={deleteBook}
          />
        ))}
      </div>
    </div>

  );


}
*/



/* 여행리스트 
import "./App.css";
import { useState } from "react";
import Trplist from "./components/Trplist";

export default function App(){
  const [nl , setnl] = useState("");
  const [jy, setjy] = useState("");
  const [tt, settt] = useState("");

  const [trplist , settrplist] = useState([
    {
      id:1,
      nl:"일본",
      jy:"교토",
      tt:"일본에서 친구 만들기",
      check:false,
    },
    {
      id:2,
      nl:"일본",
      jy:"오사카",
      tt:"오사카 도톤보리 다시가서 맛집 다먹기",
      check:false,
    },
    {
      id:3,
      nl:"일본",
      jy:"고베",
      tt:"고베에있는 영국식 건물들 구경하기",
      check:true,
    },
    {
      id:4,
      nl:"한국",
      jy:"제주도",
      tt:"가족들이랑 제주도 여행가서 한라봉 따기",
      check:false,
    },
  ]);

  const addtrp = () => {
    if(!nl || !jy || !tt) return;

    const newtrp = {
      id:Date.now,
      nl:nl,
      jy:jy,
      tt:tt,
      check:false,
    }

    settrplist([newtrp, ...trplist]);
    setnl("");
    setjy("");
    settt("");
  };



  const deletetrp = (tg) =>{
    const newtrp = trplist.filter((trp) => trp.id !== tg);
    settrplist(newtrp);
  };

  const checktrp = (tg) =>{
    const newtrp = trplist.map((trp) => {
      if(trp.id === tg){
        return {...trp, check: !trp.check};
      }
      else{
        return trp;
      }
    });
    settrplist(newtrp);
  };

  return(
    <div className="wrap">
      <h2>🚀 나의 세계여행 리스트 🚀</h2>
      <div className="inputbox">
        <input type="text" 
        placeholder="나라(예: 일본)"
        value={nl}
        onChange={(e) => setnl(e.target.value)} />
        <input type="text" 
        placeholder="지역(예: 오사카)"
        value={jy}
        onChange={(e) => setjy(e.target.value)} />
        <input type="text" 
        placeholder="가서 하고싶은것(예: 일본가서 스시먹기)"
        value={tt}
        onChange={(e) => settt(e.target.value)} />

        <button onClick={addtrp}>여행 리스트 추가</button>
      </div>

      <div className="trpboard">
        {trplist.map((trp) => (
          <Trplist 
          key={trp.id} 
          data={trp}
          ondelete={deletetrp}
          oncheck={checktrp} />
        ))}
      </div>
    </div>
  );

}
*/


/* 버킷 리스트 
import "./App.css"
import { useState } from "react"
import BClist from "./components/BClist"

export default function App(){
  const [inputbc, setinputbc] = useState("");
  const [bclist, setbclist] = useState([]);

  const addbc = () =>{
    if(inputbc === "") return;

    const databc = {
      id: Date.now(),
      text: inputbc,
      check: false,
      nb: bclist.length + 1
    };

    setbclist([databc, ...bclist]);
    setinputbc("");
  };

  const deletebc = (tg) => {
    const newbc = bclist.filter((bc) => bc.id !== tg);
    setbclist(newbc);
  }

  const checkBox = (tg) => {
    const newbc = bclist.map((bc) => {
      if(bc.id === tg){
        return {...bc , check: !bc.check};
      }
      else{
        return bc
      }
    });
    setbclist(newbc);
  };

  return(
   <div className="app-wrap">
      <h2>📑 나의 버킷 리스트 목록 📑</h2>
      <div className="input-box">
        <input type="text" 
        placeholder="내가 하고싶은 버킷을 입력해주세요"
        value={inputbc}
        onChange={(e) => setinputbc(e.target.value)}/>

        <button onClick={addbc}>버킷 추가</button>
      </div>

    <div className="bc-board">
      {bclist.map((bc) => (
        <BClist 
        key={bc.id}
        data={bc}
        ondelete={deletebc}
        oncheckbox={checkBox} />
      ))}
    </div>
   </div>

  )

}
*/

/* 투두 리스트
import "./App.css";
import { useState } from "react";
import TodoItem from "./components/TodoItem";

export default function App(){
  const [inputValue, setinputValue] = useState("");
  const [todoList, settodoList] = useState([]);

  const addTodo = () => {
    if(inputValue === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,

      isDone: false // 완료상태 처음은 펄스
    };

    settodoList([newTodo,...todoList]);
    setinputValue("");
  };

  // 삭제 버튼 추가부분
  const deleteTodo = (targetId) => {
    const newTodolist = todoList.filter((todo) => todo.id !== targetId);
    settodoList(newTodolist)
  };

  //  완료 버튼 추가부분
  const toggleComplete = (targetId) => {
    const newTodolist = todoList.map((todo) => {
      if(todo.id === targetId){
        return {...todo, isDone: !todo.isDone};
      }
      else{
        return todo
      }
    });
    settodoList(newTodolist);
  };



  return(
   <div className="app-wrap">
    <h2>📑 나의 할 일 목록 📑</h2>
    <div className="input-box">
      <input type="text" 
      placeholder="오늘 할 일을 입력해주세요" 
      value={inputValue} 
      onChange={(e) => setinputValue(e.target.value)}/>

      <button onClick={addTodo}> 추가 </button>
    </div>
    <div className="todo-board">
      {todoList.map((todo) => (
        <TodoItem 
        key={todo.id} 
        data={todo} 
        onDelete = {deleteTodo} //삭제 버튼 추가
        onToggle = {toggleComplete} //완로 버튼 추가 
        />
      ))}
    </div>
   </div> 
  );
}
*/




/* 퀴즈 3
import { useState } from "react";
import "./App.css"
import FlashCard from "./components/FlashCard";

export default function App(){
  const [scr , setscr] = useState(0);
  const crt = () => {
    setscr(scr + 1)
  };

  const quizData = 
  [
    {
      id:1,
      question:"Q. 리엑터에서 컴포넌튼 이름은 소문자로 시작해도된다? ",
      answer:"X 무조건 대문자로 시작해야 해요.",
      ans:false
    },
    {
      id:2,
      question:"Q. 화면을 그릴 때 여러 태그를 반환하려면 하나의 부모 박스(<>)로 묶어야 한다? ",
      answer:"O 빈 태그로(<>) 꼭 묶어야해요.",
      ans:true
    },
    {
      id:3,
      question:"Q. HTML의 class 속성의 리엑트에서는 ClassName라고 써야할까요? ",
      answer:"O ClassName 으로 써야합니다.",
      ans:true
    },
    {
      id:4,
      question:"Q. 리엑터에서 최종적으로 보여지는 곳은 App.jsx인가요? ",
      answer:"X 최종적으로 우리가보는 페이지는 index.html에서 보여지게되요.",
      ans:false
    },
    {
      id:5,
      question:"Q. 리엑터에서 무조건 App.jsx만 사용해서 만들어야하나요? ",
      answer:"X 무조건은 아니고 다른 연결되여있는 index.html에서 다르게 만든 파일로 바꿔서 사용할수있어요.",
      ans:false
    },
    {
      id:6,
      question:"Q. 사진을 불러올때 사용하는 코드는 import ... from ...  이맞나요?",
      answer:"O 사진을 불러와 사용할때는 import 사진이름 from 사진주소 를 적어서 사용할수있어요.",
      ans:true
    },
  ]

  return(
    <div className="wrap">
      <h2> 리액트 복습 O / X 퀴즈 V3 </h2>
      <div className="scoreborard">
        현재점수: <span>{scr}</span> / {quizData.length}점
      </div>

    <div className="cardgrid">
      {
        quizData.map((quz) => (
          <FlashCard key={quz.id} data={quz} onscr={crt}/>
        ))
      }
    </div>

    </div>
  )

  
}

*/


/* 카드 퀴즈 1 2
import { useState } from "react";
import "./App.css"
import  FlashCard from'./components/FlashCard';

export default function App(){
  const [score ,setscore] = useState(0);
  const increaseScore = () => {
    setscore(score + 1)
  };
  //추가

  const quizData = 
  [
    {
      id:1,
      question:"Q. 리엑터에서 컴포넌튼 이름은 소문자로 시작해도된다? ",
      answer:"X 땡 무조건 대문자로 시작해야 해요."
    },
    {
      id:2,
      question:"Q. 화면을 그릴 때 여러 태그를 반환하려면 하나의 부모 박스(<>)로 묶어야 한다? ",
      answer:"O 정답 빈 태그로(<>) 꼭 묶어야해요."
    },
    {
      id:3,
      question:"Q. HTML의 class 속성의 리엑트에서는 무엇이라고 써야할까요? ",
      answer:"ClassName 으로 써야합니다."
    },
    {
      id:4,
      question:"Q. 리엑터에서 최종적으로 보여지는 곳은 App.jsx인가요? ",
      answer:"X 땡 최종적으로 우리가보는 페이지는 index.html에서 보여지게되요."
    },
    {
      id:5,
      question:"Q. 리엑터에서 무조건 App.jsx만 사용해서 만들어야하나요? ",
      answer:"X 땡 무조건은 아니고 다른 연결되여있는 index.html에서 다르게 만든 파일로 바꿔서 사용할수있어요."
    },
    {
      id:6,
      question:"Q. 사진을 불러올때 사용하는 코드는 import ... from ...  이맞나요?",
      answer:"O 정답 사진을 불러와 사용할때는 import 사진이름 from 사진주소 를 적어서 사용할수있어요."
    },
  ]



  return(
    <div className="wrap">
      <h2> 리액트 복습 O / X 퀴즈 </h2>
      <p>카드를 클릭하면 정답을 확인할수있어요</p>
      <div className="scoreborard">}
        현재점수: <span>{score}</span> / {quizData.length}점
      </div>


      <div className="cardgrid">
        {
          quizData.map((quiz) =>(
            <FlashCard key={quiz.id} data={quiz} onCorrent={increaseScore}/>
          ))}
      </div>
    </div>
  )
}
*/



/* 동물 클릭호버 
import { useState } from "react";
import "./App.css"
import  AnimalsCard from'./components/AnimalsCard';
import dognm from './assets/anm/dog1.jpg';
import doghv from './assets/anm/dog2.jpg';
import catnm from './assets/anm/cat1.jpg';
import cathv from './assets/anm/cat2.jpg';
import rabbitnm from './assets/anm/rabbit1.jpg';
import rabbithv from './assets/anm/rabbit2.jpg';

export default function(){
  const animals = 
  [
    {
      id:1,
      name: "강아지",
      nmimg: dognm, 
      hvimg: doghv,
      tit: "댕청미, 활발, 자유",
      text: "주면사람들을 행복하게해주며 다른사람들과 잘 어울립니다",
    },
    {
      id:2,
      name: "고양이",
      nmimg: catnm, 
      hvimg: cathv,
      tit: "츤데레, 차분, 개인",
      text: "주면사람들을 은근히 잘 챙겨주며 차분하고 혼자하는 일을 좋아합니다",
    },
    {
      id:3,
      name: "토끼",
      nmimg: rabbitnm, 
      hvimg: rabbithv,
      tit: "집단, 애정, 집중",
      text: "주면사람들을 잘 챙겨주며 다른사람들의 마음을 잘 알아줍니다 한가지 일에 물두를 잘합니다",
    }
  ]

  return(
    <div className="wrap">
      <h2>내가 더 좋아하는 동물을 선택해 주세요</h2>
      <div className="card">
        {animals.map((animalsdata) =>(
          <AnimalsCard 
          key = {animalsdata.id}
          data={animalsdata}
          />
        ))}
      </div>
    </div>
  )
}
*/


/* 맛집 엡에 배열 불러오기 2
import { useState } from "react";
import "./App.css"
import  PhotoSlider from'./components/PhotoSlider';

export default function App(){
    const images = [
        "https://images.unsplash.com/photo-1628919350249-eb45d8829629?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVDJTgzJTg4JUVDJTlBJUIwfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1548587468-971ebe4c8c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTgzJTg4JUVDJTlBJUIwfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fCVFQyU4MyU4OCVFQyU5QSVCMHxlbnwwfHwwfHx8MA%3D%3D"
    ]


    const title = ['이쁘게 생긴 새우', '맛있어보이는 새우요리', '따끈한 새우 요리'];

  const [slt , setslt] = useState(0);
  const chang = () =>{
      let nextindex = slt + 1;
      if(nextindex === images.length){
          nextindex = 0
      }
      setslt(nextindex);
  }

  return(  
    <div className="appwrap">
      <h2 className="maintitle">제주도 맛집 탐방 슬라이더</h2>
        <PhotoSlider
        nextindex={chang}
        tit={title[slt]}
        img={images[slt]}
        />
    </div>
  );
}
*/


/* 맛집 포토에 배열 불러오기 1
import "./App.css"
import  PhotoSlider from'./components/PhotoSlider';

function App(){
  return(
    <div className="appwrap">
      <h2 className="maintitle">제주도 맛집 탐방 슬라이더</h2>
      <PhotoSlider/>
    </div>
  );
}
export default App;
*/


/* 내가좋아하는 캐릭터
import "./App.css"
import { useState } from 'react';
import Profile from'./components/Profile';

export default function App(){
  const [slt, setslt] = useState(null);

  const date = 
  [
    {
      id:1,
      name:'짱구',
      title:'짱구는 못말려',
      text: "짱구는 짱구는 못말려의 주인공이다",
      img: "https://th.bing.com/th?q=%ec%a7%b1%ea%b5%ac+%ea%b7%80%ec%97%ac%ec%9a%b4+%ec%a7%a4&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&pid=InlineBlock&rm=3&mkt=ko-KR&cc=KR&setlang=ko&adlt=strict&t=1&mw=247",
    },
    {
      id:2,
      name:'베이맥스',
      title:'빅히어로',
      text: "베이맥스에 나오는 로못이다 주인공형이 만들어준 로봇이며 주인공을 쫒아다닌다",
      img: "https://th.bing.com/th/id/OIP.Vn3XCc5ZfB-z-4M6bqnR1QHaD2?w=264&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      id:3,
      name:'고죠 사토루',
      title:'주술회전',
      text: "등장인물중에 가장 사기다",
      img: "data:image/webp;base64,UklGRgIaAABXRUJQVlA4IPYZAACwWwCdASqmALQAPp1AmUilo6IhLVdM4LATiWQAzJJl3Z6Zfwfyi/G75muRe9f4Bk08EZA9sr0l/qD2BP1b6fHmM/Yf9qveY9OP+J9QD+v/67rcfQo8u32a/3d9Hu8jv3nin5n/j2gZm/7IdTj5r+N89PYjwC/Zfnxvb3Avuj9f84T6LzQ8QDyq/43gb/df+Z7AH89/xv7AeyX/6/6rz0fUX7W/AV/OP7R+xHtS+w39qv/Z7nf69f9tw5WFe5wX/qBk+5TLdTj6OaoIt+5D+Jb6vUGeseU2iINJobpSZYI2MX8kNTLdnt+WdF91uiu/9uXIxPpiDJGcVL1/vpkhx9r2pfdF04KFjWcL29KPI1izWWgPV8xAS+TX0o6VL2dJ+aAZBY6D3V9TivicW9rlnOK74qCn606l1PTUAYuZmaUnBUDtI5sIdz5gbvygy05xwZ5kvD67AQgsm1HMT4oGgvCNI2NLvGdh8AXmWREvQI2L4Fwjq1ZrKY6U+6Ct8LPB2ROydZFSu9xsOiYBtEgmy5HOpUWB/J3qMpwVPDndnec1cllr+KnmcBX5HNvdllIlpzjHCXH+ZFQPdu+LMTWUdR0R2VO++7x0lh3ymT9tVwyowH02HbWllrtl8UyDeoYn1rVyjsGpjy6BX30TKxkpCZfqWHPVYgHsRgX+gY2f+NRPI3Tq5KWQ24+hvAzcnyMmd+WMT3eyjlttXYCZeh46eP/Vagr0eiW8g8iAe7V250DufmuiDh+28nBdj2JHxWhRu/XuGhZWZ1ReQl+pXOWE3S5wbdmem2FWQE6pohrLJo0BlQ+E9F8l5kO+JJCqr4D/jvD8foglk3B/nODs4qYuGJKZSyqaDy8yHKR1LrlLQ0q3W/kTSmYsIJIWhix7NwN5t6nfS5vmwzhqqzRO7M8qC/pPQHmqeFd3Rgr6f2wQJZnQw7PNyLINTme4bmCe4QpRMc7SUmNCSWSRbubCghGlfGK0wBW4bmgAAPqqkAv/QUfdum+eR/9/cf4K39xfwTzqFxlJCmV0eRA3/b5oQTAJb2kChHWE0ILgzMjicLK9GR2H8GCX3ZvE/5ljKjZKE3n7QooNvLgdiJmHM6YxVx7XoFujIuOjZ7UjGaHipuwqY6blvC6qboMYRQkwjmnuknlT0BvRplR53Lx62KbOnesvRfLF6trtluson8x2EhO24nFmB2acgceTADShwTdF+crkyaG2lpBP6qB01rY9GofIdnkIchjY/PqPV5M2ns1bV0ZBkuvpODxL0xscT180OEl4YIPt6FSEUci9UnSahNg702xgVw8GoGi29yRq4iH+6pM+YmoGqDCy7gcA7Zcfh51MywlVwVLJW7Cur6//3mgRBzgD3G5yiu3yc+eQFdhH58zPWlo3JHPB4i3IQtNLpnUJEL7JADgikaGhOZhFx9ji/GsKdxnj6rQ3OSQXsuHXXEMZjLaoyCs9xQ1TjDrOl/Mpf8mCFalutLuLQUYakdggOfhvTCTz0QUwPUUX3xwYqg1xXXzh60x7bBCtMGLyMZ0pPcy83JHY+18czS34wg0LMYyQ5Ma4juD+NyTukdMPbkT05ep7zRvs09k3TUfDuSF6IO/atgam9IvKoAKZUQoJEgWWwSzqmofBoUrMDZ20YdOTvriRmsTW9LrE+VPbGovhu7i68r0EmmCZxC9Nq9bKIa/nBkxQM8oSYkxwI1lCBKGPBOIl1UEkivnv0vKjlOV1B4NoKdmxusEQEC5sDGG0njpc+SiUIOzX3cYyWLfx6d55QuTjoKg2puXKs6KMN7+O16ELQjHwyTClJ9FuGwu7RiBx5D4WnEnFCYRBHcXAsqPyC2XRXiYLKeJAvD0u60EZHmZZ1pQzuwYnnuxp0XHTF+C1iigrCuQEyQy8x+fjVfrROSAs6KCLWLyrFUMgVBO7PCkvxSlT2ciuafHA7sTV2eyjglu+BMrgTJre3Stqlv/hHvHoKyvnL16unBlrI4LeADHDt5v6afd6tTw/59A9iHnvn6bay+w6CRY3Abp5TUSODFUgaQC/FAy1OHMoNIQUjuSxHMM1H1afnw13Tp/SLjfUoB4/I06oeIup9q1thF7k7JH5A5eb7Fx/2tRtWLNS+40V1E5QKSX+sRArgBclw+OP2B9yAsxZ7t3mmSN1uQRhC7itphTxKdKQT8TjF2dvOVfPfRHN5HEM5qoL1YuQPwjhN5uQk+vcYO6N0VPhvHMsZmFLZPDK9jYDcTe3D/YsXuPQjHHnukTIciPs0VCXaaBOSzmAkNAwxvulpKodnY2J9EfbGkRwWz7ovDjoZ7NL71v5mAD1BAOUcD+Mqe6tlq89HhHRaF74bDDxX5bFAb7X4Rk0z4nr7jvV5fpjjLNWpTZCC2+SJYGR57Oce5Q0bviwOj952f1Sg6Q5HFqDNBVr4tq5G4OFi3t5MuU6qOD3TEsmhb30RkyZGXElb5UZw6sFixv7gzLNPlyzXJ7+iNesHTdvX3/SaNaJZboHeLMEsqbAC0/5NViAh+6AO61sheRIJ87MVSks8I0cuTt95o8dcZ1N0H2it/QVyGJk9Xxw4I8KO5i2ST6iCht1anncL/G1xghAW3hEQwT5Qw9y4RrZv0ysoBnYRUiI7M9M04Vaviz5hJ7ZYvfqpB04QxfGY3tYv1/hXl8P0wBab69LwYVVkdf/QKCIuybPKTF5kaZtL9/hhilTwdvpPheflzo7CbBGQ8NKRu50DXmVBt+WIj22AR5ar1X50Ue+IeqWVSE4bkfEOZ/Zy6Gck4fbrmjwoX+sWwwlQ+xmDrcHfjPuzcIbpqPvH9B3Yq3WYiEpi1LhJ8rJp2neHl+DXpxEOwT9ioQkxliEXE+k+I30JYpBvHSoTSb7tJr4XLf8G5gYjydlHVlxw9XJzivpuktfBd6oZDLge7iLwuSFxj4caA0abnSJX6HqVK6Ibhk+IZX06rt8usmfQDfQA84Mklj3XxHBiLrVZV3V6QR2jYRAI6we4/2UjKjErIjs/nCyA6neLI1RfwgJGjeTGKumnkz+HhHDx1Ojssq3nFKnQE+9ieolUQXo+yNWeyGcQK2PWi1M+mteR0ffSiYEiwC0VJ/kJXpsURwIH8dKXE5QL6I9U1dBU88d5ppqQ4sz8gSWSNIPp4728H/d063GQVsLhe00gpZ2BwLlByA3G9mddqIZebAvA4xcWJcLUdzt2OACRqm/WdWeOx2Qv/imO9wGeoPSMVCgzh8JiIoVm2ZLMq4rT2Mp0XkefkfKw8jCuZI0oK5fkNpnTGamSHMsaP42xBiYAW9HwBL+uP+nvm4zNZ88TCp3JZikDq/sRTA22TX8g0brrC3nyGqRW5W899wmZiTK39DYuhkUYAj5Xdq9qjp7fgr1n3SxalVxIDcDY63plMt4vbaNxRKoTtDDwgDbmE2ab14phAxqISKmVPjE/K9I7K/rHxcCOWKZ+D87ZE7qi+NgmbG02A0pAdD3g+TjkJAJVT2mRfSq+vhLEa15HRIxvkM1cuyGSh27jNj3sdbm1Ml3Ov2//GlPvCbPjEK3ESHopkD5HO9VXikCtkl7JJBgi6U+yBAOpyUf0J7rsqsv44K+Ueh1T/Sls6zyaw7Mxn+K8UQ3U0nzb1fjS9RLQArrv/96bGycZvBEU58yOj8fDlJmDa6ZA5fXUttTgw2Lt1Cnf3l12hnWWuLqTJ0HGo113FkCcz1z92hCMac2UvlID/OPTJiQPT2MOIP+BrRdlC5UQOoO2h/cS6P28EH7S5KxWZ+rjicB7L8ijOGv9MopULfkF6sTF1TkbJ2jVgiZjjF/i9FAj7683oaCeO1hcQakwmo3cd4bkKfOXyQNMaK5fu1hEw0uBDLVLDVdAjlLZcaAGqt7M89U6E/P+jLePh+2ZBLdMTXVIq3oDr+WgdmamwdVnj63L5DSi0KFc9ivh6xLSsXyceyleVb5MZmD2de1UDVZQpYfhSvaInc1zNDdsJz/c4ZCgx2rHu6l+gdYuOmcc3zMt9smbr2LOKvJsJzebNZPCqusqPvy/PEiAvtR70UiHcsExQDDbIVaT14wNB+KQ7wbr8t+MLmKhUWiguOH91tDhDRGsG1Cx3HhxyM37d/pLRiL0PkqH2HUw/YfI8cfZvl9E7aGH2sKHYU+nX0QNy4OwV0nUvOYDncwzz3LLk0uBxHJ9xTi75JuwwdOPBLUYS3VBk0vG7Wzl8z0/XV5I2aZTY4mmI3MnYGm4Dj81B5H+tf0+ogYZ6wHuYEu/JSOa95taSZeNK2NLpK3ziAfHb9Zv2KLIML+ZYJC/8rKGvJqItNq/km9Q6Sdmsyr1UVPpgs+P3jROi/RjIFVRTF0zOG7/JVN8bRyMyHYc99EgRvkf2G9X9f9L8+DVQ4HZe2vDNfeWdHdHjwK2wPD5ydek/Yw3Kc7LAazyeG3MkhwKXbtWRalKsJdTHpu6HBcOPlplq6oVSNxeI58j9iscVzN/zO10iVu9FV8hO/E0f8iavjNrXqjYZnKKi6VXNbA+NNo24Be8qEEM8CrEsA40dcX03JBxjYJ/jEMsElL6V1e5sa8OMU0sMHR/KJ5wpWrHvlUgcAdkue2rUuFIXbzb9JIAkRp6PdlnOZzv9obtsz1reS8ZWBbWGdTw4tPaBhUeyCj4XvKStSHDrdPeX4AC+yu4yzjWw8Z7D2G9O/ZBMa/4E/K2uxgmqtjXqESUBlVslOt9JwZFEp8y/aUKEGqGWqa08XbO4i2BqxNknpyn7pwvEK/zXoq9ev2G3eLSAYpKmaL9BqXV2lwDay4O/jHV9w9GK3/n/oHGxy/zou5bHVHSO4qC8MxcW8Pv3ceiJ11PNgVYFUa9G7jH9WtHPN5eDaZaG5FLotskI/R6wY/19xlcQXZm7qXmwBZVo0VrGscTgUu1+dQC6D8DMQmgWyGKg3xuj8a7faaRwi5roSfE6ZUBmEmLEjcEkkYlXpf9Xt2eFrpu4tm/l9zG/a703LhUkeCfEQMF57UjIP6H0WRjbymZ2CO9o3JM3d/1KDQNtGadSPSTqCk00LUbyLVKK2G3wf32PSWnzMd6ypxVF5yr23oOIuT+IlRoKBRbD1pfG8bnLFJje7AGbf5usbEl4Ox8htPy/oG3s1T0QbVKAuAM8RieKcz12GULJ3OomfJHeyypXg5yGS/q9PGbCnwH/aUVRa8hGwZfW8h/w6vwxz8tbSBX4aTZSXpMoPDCe9htxSMVOOsBRZxtQx2/RU1wU3wnR71sVKh3TGJ3toV/1F/2rxQmRr9Ia9FGQCSyJBOG2rn02cYh9PD1g4LhYawCFfJFIy0a8tvPQV3/0AKb9pTiolDryOEoJSKgwPzWthijjqQdvkTZvIbOVjbTqhy2s7dN8jVpnqkJL1c7kiC7ozFJA4h0sbwKrdD/DzW+Gqc4YqTfnWUPK6tkR+lMqXtHgT2WFtPaEPAiNbnL+Y3fONW/09n7eWNEXjmPlu06Qvz3pD0lpRkfLE12SkJ3txPjmsgTgHPfOr9u5eSMZPAClm5/+DT7C3hnPwa/sqj6jfAsOOwXb/UG1UucnCQ9Frf2zKFgz51wQVBvb+ocTv0Bzrg57VcygFGxtVRTuFZxE8/Q4u8Sru+qnPYa3dmUPhmbPSPMbe3U1hGmK830t/4gbqCPgemx1W1h2T5PLIJt8SGXIQeNj2mUIT95AIKCNeTUvCRrp/9IsgTlr/dif3HtkwvXvr7wL4aCBRK8sG4kaKG2qJOYkPIT2Mmtac2G74XweYoAdSNbduiFpBAO6Rna7htY+qI75tFiQbQKnfzlyPacOPkbcom46vG0V98NwRTUIM/myUugEPlUTtVLVbYQ50k6xzYIzeS9z/DJ+fR5+YquiAYQKOtJwZxA3go4kTScAbK0CdoE/Tu30L/jdDfJ9kvdiMr1qO+3vTj8l94Rvb2RPOA3iKJfIMntDU7JcrujaSrnnLhP3no5WalimzYDioRqYyFqvg0doE9iG9ipQ+3m415R7hDEhchjeo5ZBKZfwsk1UkVECJM6monhISX8yxnqndxLUkRPUNY/u7V/y02+UQF4THA9CsiXprvxvkaQzbpybLY40e6Fs/zr8iuAsOf+G68ImmtKmKfCJXH+2GmBLw9lccPiHX0HjODGmkhya0ibV/xngbM6i2Sq8icCM2PauoLxNl0vwGqmJiS2aa8s88zOZDM0nMCd1B4l3ZCpw4mLBrJ1Z2v2aRcrdJFVvYCTbFud+fdNNwZL4LqGjuK1PKwvjvFyZ1KrqpS+5iWlFyWNcP4hMpNeS8vyyBX1oxoBqJLU51pf9dk92DgUGK0DP5umOtnX/t/8goCfK0vWZjkvZjC5lzR8DYqkDfx3a33KVskvCo5MBeOgb8nPgJFHbbapit1gVGZzY7917iftzXTtOv8FM3eWCyfUNAke0A0X4Ar9h8f9Xy4H/5dXeTlDaYYKERHaed8SO3hG6QUdUX1NuOQds5ripVPMpWBoddScUpeCdGqMaVPd84vuqoqy/cdKH8T+vL6XZ+mQtkKKaLBJSOz6/E6fTEXMNg61cvXltsPeKB7/y6fmuPauf2JUPXoEe1t3MyF46mT/bNTmk/2ZYJFPgNlMwou/dlzMeqZwol2hMEl/6l7fGxX3CyuScfpS+UIhlfH39bQYX+vVXYX7ecQkJrDIBggcIH13mXuUvyL7Q8jbK5uhT1VN5TFHIRozSQAviM+DPEQ++LhvGv1bQb4EnNADfuxgNPho/xN0gXHOL+OhmCObwKQd3g+XaCk5B01h2+iJ5CV2B4QnHOOOtaeG3ou1ICRhUIhUF1EwSZtMiBFOS/+ZDwbOCWk/ZWWDjG6wefjw/z95BizvG/x8XjykHHALnYDid/Rzv7Yw1yhLPJJ4uMfReGGeMkivwWaVXd+jNeSe4UefWbPOTbs5Lw1iVt7W/bMW9e2rtB9k+J3h2TABgtpB/yFNW6aS8PtY5/Swu0COzwJ+QbsPsmL2KoyXdAT2Lla15j5G6RBdp9+ibVsk9iPAX9BZW0zQb8h8aO0fS/l0Bo5UA+SV9eujnqF5Q1RvsuZqkccSKCL+ALY6gEjBM+Szqt6YVV9U67CLgenjSuEP0o2iHHz0eT2cTCL55Tm0dKmjt4hLog+meGM75FSVdEPaS0N1YyaSHQqfP4PRZS+DHDX7/zIKsIDTeZVkZ1HxL+tMhdkfzcvuCeXNMMEswHIegzgSXu5OKgCQ5Qdxi5Sg6XZbzGY1h74I4juLAw8E8jNhpRXC2Ruj5cE1bMNq5lozbBKeZo41AfXf8gG+t5+6pRRXnMDusJSYSXHUcOvxiNIuxuyg+f6Yb/M3wEt/Y6qUiQEykhbobYxuQzxk7CDYQEIVV30RNJOoKR06RuCelUY6B26c3LHoNkt0qCFT7u6umRB8nbaG4ygIdlrtut5WPAF7nkHY7VvqeXCtD52vCkr+b2pLkmBqH49bl15Zhbqto7nfdTQMist71Gj/g+8ekIaSz+thnaCRsexWX8l5Kb2YPX7HScBkXB04NgNu33a6ADlV+ASAIhbymHY2jyCD4e89HkCJzqzwXbcxrADxo6xPsfkXa5yUpHSAc5/BbITZah7rSz2o5FoY9/62HHeh8tGMfA5jnSa29W01Lof6T6JOm02CWTMteVTsfqmkBWjBhSEwKFHM7g+07s+8ZhJBOsByun4XAmfSQpAJAv1mjhiW97Of8rI5V82YT5aP0f4Iv+v497yf+5xNoUwp5pinE4elKpcszQL5WuHkTyEy9Rhd9bslAC2KzV0u/Woje2DKcNAfT8fc5BAyG8lXdCRPuxuZs/rnwcDo7Q+Lki9mjaYN/nKju5nVNLw57dvfTZxU9v9EaYL+8kEHYYqvdGK0LmZDaBtlQhjWhfZHW4bD/YDuuGezSpb1SwGdHJYTwPY4lEYC7d8yjkC5/h9jFpkBiRh9b0jcNUosjCqdHAbeuEgMNNWCExPfhg2pmUkJenlHWnNU73CeyAb3XA7+2d/a3suQy/+3XYUxw2ZnWzTuJW17JJme+6AaogqKWLaIWlmcpmLPKjyUIodevvMmUOviWcVouOU9v7G8qQ30DXGeNzCkFOC26Gp0N8v4nAWoSBfR8wJ5rJrC3PJMTsWUSol82xJQmC9RnlEjWYEky9As31Ef4/zH1VXaOxZEZVSfGBrp6Sp35N1vsjJMn4uRyjGDRuFt0OszkrKBtWJK/2rkRjpAQ9kwvaK15bbK+NF/jhZ6I7WEhHvlVDWhJsgeIKUBKtdP+bQpJMz/SG0zfYXe/vKdgvPUx1I8cvbj2nH9zPgek4bS+1d6w42wtP+jb7sskGB/jFT+dhQfDdraYTz+pn0UO9OlApP/nkUvzxVlQppwdBMOGPzmb9td/ln3fwb3xvQsxBzwomGg5++JAw0bEaTFAHRhblYYNqi0jwHpd4nO6d395xgjwG0H70ECJ0tgsWvTPU+Tp0wzQjr5zac4XbTc5xxAR4NK0Q7TyRa318lM8ChrATeerm/Joe3CqrvmdhqCOF0SJoRCHgRKsmjHOZh0Q+T106dEpODZ/AgKq0FHtv5bqb4RYAY1HYJPcRK23lz1ANxevbpcMhiu9VfO/onmnNYelmiinr0+aJ3NBYNqOUCfinQKtr28LOwOlCCQNO+h1qbfPsn2AuOCfzse2R97EmEIyL4T7lXcZsiyl1kYfDq6H928v+YOrJwxlTizpyJqeyyott9rce+gsol5Qg0YkPlzoVrNkA2c4/nHnju79VHtiVRO6veFjba0qi4lGy3Z4q58MgakoryhmB66sgAkcqTRmiDUewEF+cuBD0GQzDCYq94AqYvXFhwD37hjxtXmUYAAWoYGvaq39D24ZwNWEd3hGkSDLZ8BkId5rDqGOziZ4WEibvvhfMqRAM2WpwDUSNsWAAA"
    },
    {
      id:4,
      name:'덴지',
      title:'체인소맨',
      text: "덴지는 체인소맨의 주인공이다 자기몸을 전기톱형태로 변형시킬수있다",
      img: "https://th.bing.com/th/id/OIP.c65LDJno9U6ff-CqeGwQsQHaKe?w=186&h=263&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      id:5,
      name:'카프카',
      title:'괴수8호',
      text: "카프카는 괴수8호의 주인공이다 자기몸을 괴수로 변신할수있다",
      img: "https://th.bing.com/th/id/OIP.JdhhL8jYzZ84gl_8HNEWPQHaKe?w=186&h=263&c=7&r=0&o=7&pid=1.7&rm=3",
    },

  ]

  return(
    <div className="wrap">
      <h1>내가 좋아하는 캐릭터 프로필</h1>
      {date.map((it)=> (
        <Profile
          key={it.id}
          {...it}
          slt={slt}
          setslt={setslt}
        />
      ))}
    </div>
  )
}
*/


/* 언어카드
import "./App.css"
import { useState } from 'react';
import Card from'./components/Card';

export default function App(){
  const [selected , setselected] = useState(null);

  const date = 
  [
    {
      id:1,
      title:'React',
      desc:'프론트엔드 라이브러리',
      img:'data:image/webp;base64,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'
    },
    {
      id:2,
      title:'JavaScript',
      desc:'웹의 핵심언어',
      img:'https://th.bing.com/th/id/OIP.Yu-lWTSqj_5HVAtOO5WnLQHaEK?w=278&h=180&c=7&r=0&o=7&pid=1.7&rm=3'
    },
    {
      id:3,
      title:'Css',
      desc:'스타일링 담당',
      img:'data:image/webp;base64,UklGRpYFAABXRUJQVlA4IIoFAADQIACdASp3ALQAPp1GnkulqyKhpxPawWATiU3bq7Xn4zQCXca85edX0Pbaj+qegv9nPWL9NH+P32v0K/1m65V960s78Mr4yhxPaZWZx5DPor2D+kx+xXsI/rcYhov9thQB8JQ8NC4pJB9mpeB2u+Et3wem0S+0IaqLiky+razlXi4jnCjsTFBJ0GYdjZDrD8RoZ275iOv4pl2KtTyxaQr4SUUJi+GZUPqVZVHmb16HRSsqpOTZKit9p6TH3A6l8SZvocGv1N0VQBK77seh7vUcwysG5EJllSJH/AHiqT13S8QXKMLlREWWgmJRvjFQQuzF/LaYG/+PHY54656YXDRaySujqXirEMwTRf7b5IoAAP76XgAAQ///5OR9QMvqHp4/rKYyANQLgGv4AGRgZY7TcHLlKoCwhR6BrvLjJjrIJCjnKEDgB16+TMvJm0xPr6rPrB6osdx8B+28LxVJ+EqESnLPaOcJax7oknhNCcQlpJgGXHWPy6Gfy4ohaTC4VZobuWcGRxuR9eS5GKH3iBF8/HgAoxfRqKgtHce2gk6YxzrDgxUULhJvacoH8Qnwe/BReXgOp1BcCl9Zp3i93xqIJeazJDgrTD2QTlbAhNdOEPjwBxXrAC6oxpflQOyEvde6zzxNGKM794cda04Se73kEmPa4Exdz9I96LKi3XWQrYhN5DEN47y83wN4S1kQNQoGo4MopllcWzRf3QeJ3PYQDRhwxqYaxoEmCHHMlq9zgbb81H3PtIrs3DEk9i8d24DZyBavyvwf1cOj4THlAh4RmA9v/MejFZM2s40e/W1LgUmiCdvjCn6VBU6R2yFPgIM0fcpQklwUR+JF2k7PpQx0+w4IyJyblqmimn6RWZy7e56rytF+dZ6W/ZgJJsQqTwnlW25Cjre2nXORva/WthFChrdL4G3S0qxf2855Vu9ocX4b/qHjYtFbqqDhISNoCuSifsDyDS7dZMfeTE/6c2/s5e8WdzGY17w8MEKUXBLKTJP0fxmgM6yiiflX5vSxW1mh5b//ntE3n4zo0KVZbI+xJYtAU/hMN4ZMAf4FvqDnJdHSOaVHf/1KGa9zKZI5S7dNa7ICgDsT3db1sM1Z5DnYyYVlZ/n6GBZDlh73NyI/CX12xeu/ZscJmMM4KJGfqNul/Vbl3na7KtQhSpgHnT4CQyt3trKxp7kfazOLnVl4gq8f8/8VYe6PFw1/UOtjQ2vB3OTbaDnFVmQDjjAhgGBzKuQQD28cl7Z6lqbKTsGrMP0K1e4Vt+AkribQL+zvLdZvz3/VKM+GnH9EAvCbDvEPdPQE8ieKmrwwN8UI+DNFFTAwAV06j0vy02cHr/PqL/Td0RqrjJfZ+brhfrL/XuXmekRlSdl7lPpJjG12rlH6/xrz82r0GyUscffmBPnE1V9pf0YMZFnzf8oNMClMebh8Dhb8bulqKzv/1H2hqWBrqOzt5BhmHHijyM1NIAa/c/4Ck9zDkIxj85SINJjXZOKv//KtVVcVkklqcLpnjwCzlQAPiYDunKwovu5yCh1vLD1TuzNOn/4tGxYRPmWfgin4MXIxX+ol8RjXaxAz1kMkt/o4B9jpBTIlvTBNCg1dTelYzShITXjilSsD5xaNdW0Wv2MicDr7+AjJ4mml9z1/U/mYvpFIJtBhqwR+3HDNyF6u9mf47j8EfNy44o2IKtmm84blHTpBrWv0jl4TU4NNNdILVk7N9GglXerWdZ1QLTU0xLYKL0vb1S2PMIypKBi3IPKcGVcBybk4XTIDLK7E+ujdhWoap4fKC/4Fgy7V8aMGnk6PEZBBaPcNwX90/LHyQaVPtVszY5FqkPsFQD//SkfACP/UPbz3e15/QrmmL0Ylz4HZniF3SNBgobAFlyKXgQqxAAAAAAAAAA=='
    },

  ]


  return(
    <div className="container">
      {date.map((it) => (
        <Card
        key={it.id}
        {...it}
        selected={selected}
        setselected={setselected}
        />
      ))}
    </div>
  );
}
*/


/* 렌덤 색변환 
import "./App.css"
import { useState } from 'react';
import Box from'./components/Box';

export default function App(){
  return(
    <div className="wrap">
      <Box/>
      <Box/>
      <Box/>
    </div>
  )
}
*/


/* 증가감소
import "./App.css"
import { useState } from 'react';

export default function App(){
  const [count, setcount] = useState(0)

  return(
    <div className="box">
      <h1>Reat 연습</h1>
      <p className="title">현재 수치:{count}</p>
      <button onClick={() => setcount(count + 1)} style={{marginLeft:'10px'}}>
        + 증가
      </button>

      <button onClick={() => setcount(count - 1)} style={{marginLeft:'10px'}}>
        - 감소
      </button>

      <button onClick={() => setcount(0)} style={{marginLeft:'10px'}}>
        초기화
      </button>
    </div>
  )
} 
*/


/* 5 영화좌석
import Card from'./components/Card';
import "./App.css"
import { useState } from 'react';

export default function App(){
  return(

    <div className="wrap">
      <h1>🎬 엑트 시네마 스크린 📽</h1>
      <div className="cardbox">
        <Card sitnum="A1" />
        <Card sitnum="A2" />
        <Card sitnum="A3" />
        <Card sitnum="A4" />
      </div>

    </div>
  );
}
*/


/* 1 버튼 
function MyButton(){
  return(
    <button>
      i'm a button
    </button>
  );
}

export default function MyApp(){
  return(
    <div className="">
      <MyButton/>

      <h1>welcome to my app</h1>
      
      <MyButton/>
      <MyButton/>
      <MyButton/>
      <MyButton/>
      <MyButton/>
      <MyButton/>
      <MyButton/>
      <MyButton/>


    </div>
  );
}
*/


/* 2 이미지 
const user = {
  name: "짱구",
  imgurl: "data:image/jpeg;base64,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",
  imgsize: 90,

};

export default function Profile(){
  return(
    <>
      <h1>{user.name}</h1>
        <img className="jg" 
          src={user.imgurl} 
          alt={"photo" + user.name} 
          style={{
            width: user.imgsize,
            height: user.imgsize,
        }}
      />
    </>
  );
}
*/


/* 3 box1
function App(){
  return(
    <div className="wrap">
      <Box color="red" text="RED" size="100px" />
      <Box color="blue" text="BLUE" size="100px" />
      <Box color="green" text="GREEN" size="100px" />
      <Box color="yellow" text="YELLOW" size="100px" />
    </div>
  );
}
*/


/* 4 box2
import Box from'./components/Box';
import "./App.css"

function App(){
  return(
    <div className="wrap">
      <Box initcolor="red"/>
      <Box initcolor="orange"/>
      <Box initcolor="yellow"/>
      <Box initcolor="green"/>
      <Box initcolor="blue"/>
      <Box initcolor="navy"/>
      <Box initcolor="violet"/>
    </div>
  );
}
export default App; 
*/
