import React from 'react';
import {useState} from 'react';
import { Routes, Route ,Link} from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import './App.css';
import { Layout, Space } from 'antd';
import Spotify from "./images/Spotify.png";
import {SearchOutlined,DownCircleOutlined} from "@ant-design/icons"
import Audio from './components/Audio';

const {  Footer, Sider, Content } = Layout;


const App = () => {
  const [nftAlbum,setNftAlbum] = useState();
  return(
  <Layout>
  <Layout>
        <Sider style={siderStyle}><img src={Spotify} alt= "logo" className="logo" />
       <div className='searchBar'>
        <span>Search</span>
        <SearchOutlined className="searchLogo" style={{fontSize:"20px" ,}} />
        </div>
        <Link to="/">
          <p style={{color: "#1DB954"}}>Home</p>
          
        </Link>
        <p>Your Music</p>
        <div className='recentPlayed'>
          <p className='recentTitle'>Recently Played</p>
          <div className='install'>
            <span>Install App</span>
            <DownCircleOutlined className="installLogo"style={{fontSize:"20px"}} />
          </div>
        </div>
        </Sider>
    <Content className='contentWindow' style={contentStyle}>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album" element={<Album setNftAlbum={setNftAlbum}/>} />
      </Routes>
     </Content>
    </Layout>
    <Footer>
      {nftAlbum &&
      <Audio nftAlbum={nftAlbum}/>
      }
      
    </Footer>
    </Layout>
    
  )
};

export default App;

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '40px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '39px',

  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};