<>
  <meta charSet="UTF-8" />
  <title>Weather app</title>
  <link rel="icon" href="../dist/Icon-clouds.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css%20files/main.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
    rel="stylesheet"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Mukta:wght@300&display=swap"
    rel="stylesheet"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
    rel="stylesheet"
  />
  <div id="main_container">
    <div id="main_nav">
      <p>NOSA</p>
    </div>
    <div id="main_content">
      <div id="main_container-left">
        <div id="content_climate_status">
          <p>Shattered clouds</p>
        </div>
        <div id="main_content-left">
          <div id="content_temp">
            <p>13 °</p>
          </div>
          <div id="content_city_date">
            <div id="content_city">
              <p>London</p>
            </div>
            <div id="content_date">
              <p>monday-9 sep</p>
            </div>
          </div>
          <div id="content_imgstatus">
            <div id="content_img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                fill="#f5f5f5"
                viewBox="0 2.42 32 29.57"
              >
                <title>cloudy-night</title>
                <path d="M27.191 16.385c0.305-0.227 0.613-0.449 0.889-0.725 0.826-0.827 1.454-1.833 1.862-2.991 0.13-0.362 0.038-0.768-0.236-1.039-0.272-0.273-0.676-0.366-1.039-0.237-2.212 0.781-4.605 0.25-6.244-1.391-1.641-1.641-2.174-4.033-1.391-6.244 0.128-0.363 0.036-0.767-0.237-1.040-0.271-0.271-0.676-0.365-1.039-0.237-1.159 0.411-2.164 1.039-2.99 1.864-2.096 2.094-2.749 5.063-2.030 7.737-2.703 0.345-5.133 1.781-6.751 3.987-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-3.090-2.026-5.689-4.809-6.615zM18.182 5.76c0.159-0.161 0.329-0.311 0.509-0.452-0.141 2.249 0.671 4.461 2.319 6.108 1.648 1.648 3.861 2.458 6.109 2.319-0.862 1.099-2.050 1.783-3.32 2.074-1.711-2.172-4.225-3.539-6.997-3.762-0.767-2.122-0.318-4.59 1.38-6.288zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.137 1.902 0.379 1.262-2.46 3.734-4.181 6.645-4.346 0.152-0.009 0.301-0.033 0.453-0.033 0.807 0 1.582 0.126 2.313 0.349 0.987 0.302 1.887 0.794 2.668 1.428 0.746 0.605 1.371 1.348 1.863 2.181 0.083 0.141 0.177 0.273 0.253 0.421 0.587-0.242 1.229-0.379 1.904-0.379 2.762 0 5 2.238 5 5s-2.238 5-5 5z" />
              </svg>
            </div>
          </div>
        </div>
        <div id="main_input-container">
          <input type="text" id="main_input" placeholder="Search Location..." />
          <div id="main_search-svg-container">
            <svg
              id="main_search-svg"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0,0,256,256"
              fillRule="nonzero"
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth={3}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={10}
                strokeDasharray=""
                strokeDashoffset={0}
                fontFamily="none"
                fontWeight={500}
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z" />
                </g>
              </g>
            </svg>
          </div>
          <div id="main_error-container" className="hide">
            <p>Location not found.</p>
          </div>
        </div>
      </div>
      <div id="main_container-right">
        <div id="main_right-feels_like" className="main_right-block">
          <div className="main_right_svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={48}
              viewBox="0 -960 960 960"
              width={48}
            >
              <path d="M523-580v-60h230v60H523Zm0-120v-60h320v60H523ZM296-121q-75.53 0-128.765-53.235Q114-227.47 114-303q0-48 24-90.5t66-68.5v-286q0-38.333 26.765-65.167 26.764-26.833 65-26.833Q334-840 361-813.167q27 26.834 27 65.167v286q42 26 66 68.5t24 90.5q0 75.53-53.235 128.765Q371.53-121 296-121ZM174-303h244q0-40-19-71.5T348-420l-20-9v-319q0-13.6-9.2-22.8-9.2-9.2-22.8-9.2-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8v319l-20 9q-32 14-51 46t-19 71Z" />
            </svg>
          </div>
          <div className="main-right_text">
            <p className="main_right_header">Feels Like</p>
            <p id="feels_like-editable">18° C</p>
          </div>
        </div>
        <div id="main_right-humidity" className="main_right-block">
          <div className="main_right_svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={48}
              viewBox="0 -960 960 960"
              width={48}
            >
              <path d="M480-100q-133 0-226.5-91.709T160-415q0-63.142 24.5-120.771Q209-593.401 254-637.5L480-860l226 222.5q45 44.099 69.5 101.729Q800-478.142 800-415q0 131.582-93.5 223.291T480-100Zm-.235-60Q588-160 664-234.067q76-74.067 76-181.113Q740-466 720.5-512 701-558 666-593L480-776 294-593q-35 35-54.5 80.996-19.5 45.995-19.5 96.861Q220-308 295.765-234q75.764 74 184 74Z" />
            </svg>
          </div>
          <div className="main-right_text">
            <p className="main_right_header">Humidity</p>
            <p id="humidity-editable">45 %</p>
          </div>
        </div>
        <div id="main_right-wind" className="main_right-block">
          <div className="main_right_svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              style={{}}
            >
              <path d="M13 5.5C13 3.57 11.43 2 9.5 2 7.466 2 6.25 3.525 6.25 5h2c0-.415.388-1 1.25-1 .827 0 1.5.673 1.5 1.5S10.327 7 9.5 7H2v2h7.5C11.43 9 13 7.43 13 5.5zm2.5 9.5H8v2h7.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5c-.862 0-1.25-.585-1.25-1h-2c0 1.475 1.216 3 3.25 3 1.93 0 3.5-1.57 3.5-3.5S17.43 15 15.5 15z" />
              <path d="M18 5c-2.206 0-4 1.794-4 4h2c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2H2v2h16c2.206 0 4-1.794 4-4s-1.794-4-4-4zM2 15h4v2H2z" />
            </svg>
          </div>
          <div className="main-right_text">
            <p className="main_right_header">Wind speed</p>
            <p id="wind-editable">25 km/h</p>
          </div>
        </div>
      </div>
    </div>
    <div id="main_footer">
      <div id="foot_head">
        <p>Previous data</p>
      </div>
      <div id="main_foot-content">
        <div className="foot_containers">
          <p className="foot_days-ago one">Yesterday</p>
          <p className="foot_days-data one">20° C</p>
        </div>
        <div className="foot_containers">
          <p className="foot_days-ago two">1 day ago</p>
          <p className="foot_days-data two">20° C</p>
        </div>
        <div className="foot_containers">
          <p className="foot_days-ago three">2 days ago</p>
          <p className="foot_days-data three">20° C</p>
        </div>
        <div className="foot_containers">
          <p className="foot_days-ago four">3 days ago</p>
          <p className="foot_days-data four">23° C</p>
        </div>
        <div className="foot_containers">
          <p className="foot_days-ago five">4 days ago</p>
          <p className="foot_days-data five">25° C</p>
        </div>
      </div>
    </div>
  </div>
</>
