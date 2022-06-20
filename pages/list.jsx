import Head from "next/head";

import { useEffect, useState } from "react";

import Product from "../components/Product";
import NewProduct from "../components/NewProduct";
import EditProduct from "../components/EditProduct";
import CreateList from "../components/CreateList";

import styles from "../styles/List.module.css";

import { supabaseClient } from "../client.js";
import Total from "../components/Total";

import Image from "next/image";
import logo from "../public/logo.png";
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';

import router, { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter();
  const id = router.query.id;

  const [posts, setPosts] = useState([]);
  const [isCopied, setIsCopied] = useState(false);
  const [post, setPost] = useState({
    name: "",
    qtt: 0,
    price: 0,
    listname: 0,
  });

  const { name, qtt, price } = post;

  const [ styleHide, setStyleHide ] = useState(styles.copyTagHide);
  const [ productInfo, SetProductInfo ] = useState({});

  const [ hide, setHide ] = useState(false);
  const [ editPost, setEditPost ] = useState(false);
  

  useEffect(() => {
    fetchPost(localStorage.getItem("listname") || 123);  

    
    

    autoLoad((post) => {
      
      setPosts((prev) => {
        return [...prev, post];
      });
    });

    autoLoadUpdate((post) => {
      
      setPosts((prev) => {
        prev.map( (item) => {
          if(post.id === item.id){
            return (item.name = post.name, item.price = post.price, item.qtt = post.qtt) 
            
            
            
          }
          
        } )                  
        return [...prev];
        
        
      });
    });
    
  }, [posts]);


  

 





  async function fetchPost() {
    const { data, error } = await supabaseClient
      .from("produtos")
      .select()
      .order("id", { ascending: true })
      .eq("listname", localStorage.getItem("listname"));
      setPosts(data);
    console.log("error:", error);
    
  }

  function autoLoad(callBack) {
    return supabaseClient
      .from("produtos")
      .on("*" , (res) => {
        callBack(res.new);
      })
      .subscribe();
    }
    function autoLoadUpdate(callback) {
      return supabaseClient
      .from("produtos")
      .on("UPDATE"  , (res) => {
        callback(res.new);       
      })
      .subscribe();
      
  }

  async function createPost(name, qtt, price) {
    await supabaseClient
      .from("produtos")
      .insert([
        { name, qtt, price, listname: localStorage.getItem("listname") },
      ])
      .single();
    setPost({ name: "", qtt: 0, price: 0, listname: 0 });
    fetchPost();
  }

  function renderProducts(array) {
    return array.map((item, i) => {
      return (
        <Product key={i} id={item.id} name={item.name} qtt={item.qtt} price={item.price} setEditPost={setEditPost} setProductInfo={SetProductInfo} />        
      );
    });
  }

  function setLocalStorage(id) {
    localStorage.setItem("listname", id);
  }
  
  async  function copyText(param, callback){
    try{
      await navigator.clipboard.writeText(param);
      callback();   
    } catch (e) {
      
    }
   
  }

  function copyTagHide(){
    setStyleHide(styles.copyTag)
    setTimeout(() => {
        setStyleHide(styles.copyTagHide)
    }, 1000)
}

  return (
    <div className={styles.container}>
      <Head>
        <title>Lista de mercado</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.listMain}>
        <header className={styles.header}> 

          <div className={styleHide} >
            copied
          </div>

          <div className={styles.imgLogo} onClick={() => router.push("/")}>
            <Image
              src={logo}
              alt="Logo do App Lista de Mercado"
              className={styles.imgLogo}
            />
          </div>
          <h1 className={styles.listCode} onClick={ () => copyText(id, copyTagHide)}>{id}  <FileCopyOutlinedIcon className={styles.copyIcon}  /></h1>
          
        </header>
        {/* <ProductNew createPost={createPost}/> */}

        <div className={styles.listaDeProdutos}>{renderProducts(posts)}</div>

        <NewProduct createPost={createPost} hide={hide} setHide={setHide}/>
        <EditProduct createPost={createPost} hide={editPost} setEditPost={setEditPost} posts={posts} setPosts={setPosts} fetchPost={fetchPost} productInfo={productInfo} autoLoadUpdate={autoLoadUpdate}  />
        <Total products={posts} />
        <div className={styles.btnNewProduct} onClick={() => setHide(true)}>
          <a > + </a>
        </div>
      </main>      
    </div>
  );
}
