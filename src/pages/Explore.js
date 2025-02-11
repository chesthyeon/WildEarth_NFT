import { useState, useEffect } from 'react';
import React from 'react';
import logo from '../logo.svg';

import { Carousel,Navbar,Container, Nav, NavDropdown, Card,DropdownButton, Dropdown } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link, useNavigate} from 'react-router-dom';

import './/pagecss/Explore.css';
import {ACCESS_KEY_ID, SECRET_ACCESS_KEY} from '../apikey';
import Caver from 'caver-js';
import '../App.css';
import {CONTRACTADDRESS, ABI} from '../config';

const CHAIN_ID = '1001'; //테스트넷

const option = {
  headers: [
    {
      name: "Authorization",
      value: "Basic " + Buffer.from(ACCESS_KEY_ID +":"+ SECRET_ACCESS_KEY).toString("base64")
    },
    {name: "x-chain-id", value:CHAIN_ID}
  ]
}

const caver = new Caver(new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn",option));
const NFTContract = new caver.contract(ABI, CONTRACTADDRESS);

const TotalNFT = async () => {
    const total = await NFTContract.methods.totalSupply().call();
    console.log(total);
    var tokenIDs = []
    var animalName = []
    var tokenURIs = []
    var tokenimg = []
    var nftprice = []
    var nfts = []
    for (var i = 0; i<total; i++){
        // 토큰 ID
        const nftIndex = await NFTContract.methods.tokenByIndex(i).call();
        tokenIDs.push(nftIndex);
    }

    for (var i = 0; i<tokenIDs.length; i++){
        // NFT 가격
        const nftPrice = await NFTContract.methods.animalTokenPrices(tokenIDs[i]).call();
        nftprice.push(nftPrice);
        // NFT 이미지
        const nftImg = await NFTContract.methods.tokenURI(tokenIDs[i]).call();
        fetch(nftImg)
        .then(res => res.json())
        .then((out) => {
            tokenimg.push(out.image)
        })
        // NFT 이름
        const nftNm = await NFTContract.methods.tokenURI(tokenIDs[i]).call();
        fetch(nftNm)
        .then(res => res.json())
        .then((out) => {
            animalName.push(out.attributes[1].value)
        })
        // NFT JSON URI
        const nftURI = await NFTContract.methods.tokenURI(tokenIDs[i]).call();
        tokenURIs.push(nftURI);

        nfts.push({id : tokenIDs[i], uri: tokenURIs[i], image: tokenimg[i], name: animalName[i], price: nftprice[i]});

    }
    
    console.log(nfts);
    return nfts;
}

const RankItem = [
    {
        NAME: "수리부엉이",
        URL_: "\\img\\owl.png",
        Num_: "2",
        Price : 150
    },
    {
        NAME: "하프물범",
        URL_: "\\img\\seal.png",
        Num_: "3",
        Price : 10
    },
    {
        NAME: "반달가슴곰",
        URL_: "\\img\\bear.png",
        Num_: "4",
        Price : 15
    },
    {
        NAME: "수리부엉이",
        URL_: "\\img\\owl.png",
        Num_: "5",
        Price : 1000
    },
    {
        NAME: "하프물범",
        URL_: "\\img\\seal.png",
        Num_: "6",
        Price : 50
    }   
]


function NFTList({NFT_name,NFT_url,NFT_number,NFT_price}){ 
    let cost = NFT_price/(10**18);
    let [show, setShow] = useState(true);

    useEffect(()=>{
        if (cost == 0){
            setShow(false);
        }
    },[]);

    return(
        <div className='marketImg'>
            <Card className='marketCard'>
                <Card.Img variant="bottom" src={NFT_url} />
                <Card.Body className='marketCardBody'>
                    <Card.Text style={{fontWeight:"bold",fontSize:"30px",textAlign:"left"}}>
                        {NFT_name}
                        <br/>
                        #{NFT_number}
                    </Card.Text>
                    {show && <Card.Text style={{fontWeight:"",fontSize:"20px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                        PRICE 
                        <br/>
                        {cost} KLAY
                    </Card.Text>}
                </Card.Body>
            </Card>    
        </div>
    );
};

function Ranking({NFT_name,NFT_url}){

    return(
        <div className='rankingImg'>
            <Card className='rankingCard'>
                <Card.Img variant="bottom" src={NFT_url}/>
                <Card.Body className='marketCardBody'>
                    <Card.Text style={{fontWeight:"bold"}}>
                        {NFT_name}          
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

function Explore() {
    const [nfts, setNfts] = useState([]);

    const allnfts = async () => {
        const _nfts = await TotalNFT();
        setNfts(_nfts);
    }

    function numberSort(){
        
    }
    function lowerPriceSort(){
        
    }
    function HigherPriceSort(){
        
    }

    return (
        <>
        <div className='exploreBack'>
            <div className='rankingBack'>
                <div className='rankingTxt' style={{textAlign:"left",fontWeight:"bold"}}>
                    RANKING
                </div>

                <div className='rankingList'>
                    {RankItem.map(item=>(
                    <Link to={`/Buy/${item.Num_}`} style={{textDecoration: 'none', color:'black'}} state={{Nname : item.NAME, Src : item.URL_, Cost : item.Price, Nid : item.Num_}}>
                        <Ranking NFT_name={item.NAME} NFT_url={item.URL_}/>
                    </Link>
                    ))}
                </div>
            </div>
            <div className='marketBack'>
                <div className='marketTxt' style={{textAlign:"left",fontWeight:"bold"}} onClick={allnfts()}>
                    MARKET
                    {/* <button onClick={allnfts()}></button> */}
                </div>
                <div className="sortBack">
                    <DropdownButton id="marketSort" variant='light' size='larger' title="Sort By" textAlign="right">
                        <Dropdown.Item as="button" onClick={numberSort}>번호순</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={lowerPriceSort}>낮은가격순</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={HigherPriceSort}>높은가격순</Dropdown.Item>
                    </DropdownButton> 
                </div>
                <div className='marketList'>
                    {nfts.map((nft, index) => (
                        <>
                        <Link to={`/Buy/${nfts[index].id}`} style={{textDecoration: 'none', color:'black'}} state={{jsonAddress : nfts[index].uri, Nid : nfts[index].id, Cost : nfts[index].price}}>
                            <NFTList NFT_url={nfts[index].image} NFT_number={nfts[index].id} NFT_name={nfts[index].name} NFT_price={nfts[index].price}/>
                        </Link>
                        {/* <p>{nfts[index].image}</p> */}
                        </>
                    )
                    )}
                </div>
            </div>
            <div className='btmBar' fixed='bottom'>
                <div className='btmBarTop'>
                    <Navbar bg="#aaaaaa" variant="dark">
                        <Container className='btmNav'>
                        <Navbar.Brand href="/" className="navLogo">
                            <img src = "\img\logo_cap.png" alt={logo} width = '160' height= '72' marginRight = '20px' textAlign = 'center'/>
                        </Navbar.Brand>
                        <Nav className="btmTab">
                            <Nav.Link href="/Animal" style={{color:"#393939", fontWeight:"bold", marginRight:"20%"}}>Animal</Nav.Link>
                            <Nav.Link href="/Explore" style={{color:"#393939", fontWeight:"bold", marginRight:"20%"}}>Explore</Nav.Link>
                            <Nav.Link href="/Profile" style={{color:"#393939", fontWeight:"bold", marginRight:"20%"}}>Profile</Nav.Link>
                            <Nav.Link  style={{color:"#393939", fontWeight:"bold", marginRight:"50%"}}>Connect</Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar>
                </div>
                <div className='btmBarMid'>
                    <div className='btmBarMidLine'></div>
                </div>
                <div className='btmBarBtm'>
                    <div class='logoCont'>
                        <a  href = "http://dongguk.edu/main">
                            <img src = "\img\dongguk_logo.png" width = '234' height= '76'  textAlign = 'center'></img>
                        </a>
                    </div>
                    <div className='git' style={{textAlign:"left",fontWeight:"bold",fontSize:"24px",color:"#393939"}}>
                        gitHub <br/>
                        <div className='gitAdd' >
                            <div className='gitAddLeft' style={{marginRight:"7%"}}>
                                github.com/banghyun <br/>
                                github.com/Heejun <br/>
                                github.com/zoonong <br/>
                            </div>
                            <div className='gitAddRight'>
                                github.com/suhwan <br/>
                                github.com/ssangjun <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Explore;