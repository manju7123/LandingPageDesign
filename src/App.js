import Header from './components/Header'
import './App.css'

const App=()=>(
  <div className="landing-container">
    <div className="landing-first-card">
    <Header />
    <div className="banner">
    <div className="row">
      <div className="row-ele-card">
      <h1 className="row-ele">Learn from your 
favorite creators 
about <span className="ele-span">fantasy reports</span></h1>
      </div>
      <div className="group-card">
      <svg className="group-logo" width="204" height="204" viewBox="0 0 204 204" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="20" width="164" height="164" rx="82" fill="#2B2730"/>
<path d="M82.563 78.0254V71.7672H93.4657V100.5H86.4596V78.0254H82.563ZM101.888 100.815C100.707 100.815 99.7361 100.474 98.9752 99.7915C98.2404 99.083 97.8731 98.2171 97.8731 97.1938C97.8731 96.1442 98.2404 95.2651 98.9752 94.5566C99.7361 93.8482 100.707 93.4939 101.888 93.4939C103.042 93.4939 103.987 93.8482 104.722 94.5566C105.483 95.2651 105.863 96.1442 105.863 97.1938C105.863 98.2171 105.483 99.083 104.722 99.7915C103.987 100.474 103.042 100.815 101.888 100.815ZM101.888 84.7954C100.707 84.7954 99.7361 84.4542 98.9752 83.772C98.2404 83.0635 97.8731 82.1976 97.8731 81.1742C97.8731 80.1246 98.2404 79.2456 98.9752 78.5371C99.7361 77.8286 100.707 77.4744 101.888 77.4744C103.042 77.4744 103.987 77.8286 104.722 78.5371C105.483 79.2456 105.863 80.1246 105.863 81.1742C105.863 82.1976 105.483 83.0635 104.722 83.772C103.987 84.4542 103.042 84.7954 101.888 84.7954ZM108.547 78.0254V71.7672H119.449V100.5H112.443V78.0254H108.547Z" fill="white"/>
<path d="M53.6601 135.351L56.0414 127.519H59.6231L55.7265 138.5H51.574L47.6774 127.519H51.2788L53.6601 135.351ZM62.7321 126.377C62.1417 126.377 61.6563 126.207 61.2758 125.865C60.9084 125.511 60.7247 125.078 60.7247 124.567C60.7247 124.042 60.9084 123.609 61.2758 123.268C61.6563 122.913 62.1417 122.736 62.7321 122.736C63.3094 122.736 63.7817 122.913 64.1491 123.268C64.5296 123.609 64.7198 124.042 64.7198 124.567C64.7198 125.078 64.5296 125.511 64.1491 125.865C63.7817 126.207 63.3094 126.377 62.7321 126.377ZM64.4049 127.519V138.5H61.0396V127.519H64.4049ZM66.1746 132.99C66.1746 131.861 66.3845 130.871 66.8043 130.018C67.2373 129.165 67.8211 128.509 68.5559 128.05C69.2906 127.591 70.1106 127.361 71.0159 127.361C71.7375 127.361 72.3935 127.512 72.9839 127.814C73.5874 128.116 74.0597 128.522 74.4008 129.034V123.937H77.7661V138.5H74.4008V136.926C74.0859 137.45 73.6333 137.87 73.0429 138.185C72.4656 138.5 71.7899 138.657 71.0159 138.657C70.1106 138.657 69.2906 138.428 68.5559 137.969C67.8211 137.496 67.2373 136.834 66.8043 135.981C66.3845 135.115 66.1746 134.118 66.1746 132.99ZM74.4008 133.009C74.4008 132.17 74.1647 131.507 73.6923 131.022C73.2331 130.536 72.669 130.293 71.9999 130.293C71.3307 130.293 70.76 130.536 70.2877 131.022C69.8285 131.494 69.5989 132.15 69.5989 132.99C69.5989 133.829 69.8285 134.498 70.2877 134.997C70.76 135.482 71.3307 135.725 71.9999 135.725C72.669 135.725 73.2331 135.482 73.6923 134.997C74.1647 134.512 74.4008 133.849 74.4008 133.009ZM90.5524 132.832C90.5524 133.147 90.5327 133.475 90.4934 133.816H82.8772C82.9297 134.498 83.1462 135.023 83.5267 135.391C83.9203 135.745 84.3991 135.922 84.9633 135.922C85.803 135.922 86.3868 135.568 86.7148 134.859H90.2966C90.1129 135.581 89.7783 136.23 89.2929 136.808C88.8206 137.385 88.2236 137.837 87.502 138.165C86.7804 138.493 85.9735 138.657 85.0814 138.657C84.0055 138.657 83.0478 138.428 82.2081 137.969C81.3684 137.509 80.7124 136.853 80.2401 136.001C79.7678 135.148 79.5316 134.151 79.5316 133.009C79.5316 131.868 79.7612 130.871 80.2204 130.018C80.6927 129.165 81.3487 128.509 82.1884 128.05C83.0281 127.591 83.9924 127.361 85.0814 127.361C86.1441 127.361 87.0887 127.584 87.9153 128.03C88.7419 128.476 89.3847 129.113 89.8439 129.939C90.3163 130.766 90.5524 131.73 90.5524 132.832ZM87.1084 131.947C87.1084 131.369 86.9116 130.91 86.518 130.569C86.1244 130.228 85.6324 130.057 85.042 130.057C84.4779 130.057 83.999 130.221 83.6054 130.549C83.2249 130.877 82.9887 131.343 82.8969 131.947H87.1084ZM97.3265 138.657C96.2507 138.657 95.2798 138.428 94.4139 137.969C93.5611 137.509 92.8854 136.853 92.3868 136.001C91.9014 135.148 91.6586 134.151 91.6586 133.009C91.6586 131.881 91.9079 130.89 92.4065 130.038C92.905 129.172 93.5873 128.509 94.4532 128.05C95.3191 127.591 96.29 127.361 97.3659 127.361C98.4417 127.361 99.4126 127.591 100.278 128.05C101.144 128.509 101.827 129.172 102.325 130.038C102.824 130.89 103.073 131.881 103.073 133.009C103.073 134.138 102.817 135.135 102.306 136.001C101.807 136.853 101.118 137.509 100.239 137.969C99.3732 138.428 98.4023 138.657 97.3265 138.657ZM97.3265 135.745C97.9694 135.745 98.5139 135.509 98.9599 135.036C99.4191 134.564 99.6487 133.888 99.6487 133.009C99.6487 132.13 99.4257 131.455 98.9796 130.982C98.5467 130.51 98.0087 130.274 97.3659 130.274C96.7099 130.274 96.1654 130.51 95.7324 130.982C95.2995 131.441 95.083 132.117 95.083 133.009C95.083 133.888 95.2929 134.564 95.7127 135.036C96.1457 135.509 96.6836 135.745 97.3265 135.745ZM108.36 133.009C108.36 131.868 108.589 130.871 109.049 130.018C109.521 129.165 110.17 128.509 110.997 128.05C111.837 127.591 112.794 127.361 113.87 127.361C115.248 127.361 116.396 127.722 117.314 128.444C118.246 129.165 118.856 130.182 119.144 131.494H115.563C115.261 130.654 114.677 130.234 113.811 130.234C113.194 130.234 112.702 130.477 112.335 130.963C111.968 131.435 111.784 132.117 111.784 133.009C111.784 133.901 111.968 134.59 112.335 135.076C112.702 135.548 113.194 135.784 113.811 135.784C114.677 135.784 115.261 135.364 115.563 134.525H119.144C118.856 135.81 118.246 136.821 117.314 137.555C116.383 138.29 115.235 138.657 113.87 138.657C112.794 138.657 111.837 138.428 110.997 137.969C110.17 137.509 109.521 136.853 109.049 136.001C108.589 135.148 108.36 134.151 108.36 133.009ZM120.275 132.99C120.275 131.861 120.485 130.871 120.905 130.018C121.338 129.165 121.922 128.509 122.657 128.05C123.391 127.591 124.211 127.361 125.117 127.361C125.891 127.361 126.566 127.519 127.144 127.833C127.734 128.148 128.187 128.562 128.502 129.073V127.519H131.867V138.5H128.502V136.945C128.174 137.457 127.714 137.87 127.124 138.185C126.547 138.5 125.871 138.657 125.097 138.657C124.205 138.657 123.391 138.428 122.657 137.969C121.922 137.496 121.338 136.834 120.905 135.981C120.485 135.115 120.275 134.118 120.275 132.99ZM128.502 133.009C128.502 132.17 128.265 131.507 127.793 131.022C127.334 130.536 126.77 130.293 126.101 130.293C125.432 130.293 124.861 130.536 124.389 131.022C123.929 131.494 123.7 132.15 123.7 132.99C123.7 133.829 123.929 134.498 124.389 134.997C124.861 135.482 125.432 135.725 126.101 135.725C126.77 135.725 127.334 135.482 127.793 134.997C128.265 134.512 128.502 133.849 128.502 133.009ZM137.667 123.937V138.5H134.302V123.937H137.667ZM143.471 123.937V138.5H140.106V123.937H143.471ZM150.377 138.657C149.419 138.657 148.566 138.493 147.819 138.165C147.071 137.837 146.48 137.391 146.047 136.827C145.614 136.25 145.372 135.607 145.319 134.899H148.645C148.685 135.279 148.862 135.587 149.177 135.824C149.491 136.06 149.878 136.178 150.338 136.178C150.758 136.178 151.079 136.099 151.302 135.942C151.538 135.771 151.656 135.555 151.656 135.292C151.656 134.977 151.492 134.748 151.164 134.603C150.836 134.446 150.305 134.275 149.57 134.092C148.783 133.908 148.127 133.718 147.602 133.521C147.077 133.311 146.625 132.99 146.244 132.557C145.864 132.111 145.674 131.514 145.674 130.766C145.674 130.136 145.844 129.565 146.185 129.054C146.539 128.529 147.051 128.116 147.72 127.814C148.402 127.512 149.209 127.361 150.141 127.361C151.518 127.361 152.601 127.702 153.388 128.384C154.188 129.067 154.648 129.972 154.766 131.1H151.656C151.604 130.72 151.433 130.418 151.145 130.195C150.869 129.972 150.502 129.86 150.042 129.86C149.649 129.86 149.347 129.939 149.137 130.097C148.927 130.241 148.822 130.444 148.822 130.707C148.822 131.022 148.986 131.258 149.314 131.415C149.655 131.573 150.18 131.73 150.889 131.888C151.702 132.097 152.365 132.307 152.876 132.517C153.388 132.714 153.834 133.042 154.215 133.501C154.608 133.947 154.812 134.551 154.825 135.312C154.825 135.955 154.641 136.532 154.274 137.044C153.919 137.542 153.401 137.936 152.719 138.224C152.05 138.513 151.269 138.657 150.377 138.657Z" fill="white"/>
<circle cx="102" cy="102" r="101" stroke="#2B2730" stroke-width="2"/>
</svg>
      </div>
    </div>
    <img className="report-image" src='https://res.cloudinary.com/dypcvljoq/image/upload/v1698995951/img_1_lxm0tf.jpg' alt='reportImage'/>
    </div>
  </div>
  <div className='team-card'>
    <h1 className='team-ele'> <span className='team-span'>Get direct</span> <hr className='hr-line' />
knowledge and insight. </h1>
<div className='team-image-card'>
  <img className='team-image' src='https://res.cloudinary.com/dypcvljoq/image/upload/v1698995940/img-card_1_gnf6ck.jpg' alt="cardImage" />
  <img className='team-image' src='https://res.cloudinary.com/dypcvljoq/image/upload/v1699000881/img-card_3_nl57km.jpg' alt="cardImage" />
  <img className='team-image' src='https://res.cloudinary.com/dypcvljoq/image/upload/v1698995917/img-card_2_iob9dq.jpg' alt="cardImage" />
</div>
<div className='team-row-card'>
  <div className='team-inner-col-card'>
  <div className='team-col'>
    <h1 className='team-col-heading'> 300 </h1>
    <p className='team-col-para'> creators </p>
  </div>
  <div className='team-col'>
    <h1 className='team-col-heading'> 14.4k </h1>
    <p className='team-col-para'> users </p>
  </div>
  <div className='team-col'>
    <h1 className='team-col-heading'> 9.11k </h1>
    <p className='team-col-para'> session </p>
  </div>
  </div>
  <div className='team-row'>
    <h1 className='team-row-para'>Explore the marketplace </h1>
    <svg  className='team-row-img' width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="64" height="64" rx="32" fill="#FFB84C"/>
<path d="M26 20L38 32L26 44" stroke="#2B2730" stroke-width="2" stroke-linecap="round"/>
</svg>
  </div>
</div>
</div>
<div className="creator-page">
  <div className="creator-card">
    <h1 className="creator-heading">Why become a creator?</h1>
    <p className="creator-para">Engage with your supporter and subscriber to sell your skills, knowledge and passions</p>
    <button className="creator-button">Become a creator</button>
  </div>
  <div className="creator-tools">
    <div className="creator-tool-card">
    <svg className="creator-tool-img" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="engaze-svg">
<g id="Group">
<circle id="Ellipse" cx="64" cy="64" r="15" stroke="#2B2730" stroke-width="4"/>
<circle id="Ellipse_2" cx="64" cy="64" r="60" stroke="#2B2730" stroke-width="4"/>
<circle id="Ellipse_3" cx="63.9922" cy="64" r="35" stroke="#2B2730" stroke-width="4"/>
</g>
</g>
</svg>
<h1 className="creator-tool-name"> Engagement </h1>
<p className="creator-tool-description">Engage on a deeper level with the fans that matter most</p>
    </div>
    <div className="creator-tool-card">
    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="autonomy-svg">
<g id="Group">
<g id="Group_2">
<rect id="Rectangle" x="10" y="4" width="46.1538" height="46.1538" rx="8" stroke="#2B2730" stroke-width="4"/>
<path id="Vector" d="M70 27.3594H118.462M118.462 27.3594L105.348 40.923M118.462 27.3594L105.348 13.2307" stroke="#2B2730" stroke-width="4"/>
</g>
<g id="Group_3">
<path id="Vector_2" d="M58.4615 101.206H10M10 101.206L23.1131 114.769M10 101.206L23.1131 87.0769" stroke="#2B2730" stroke-width="4"/>
<rect id="Rectangle_2" x="72.3077" y="77.8462" width="46.1538" height="46.1538" rx="8" stroke="#2B2730" stroke-width="4"/>
</g>
</g>
</g>
</svg>
<h1 className="creator-tool-name"> Autonomy </h1>
<p className="creator-tool-description">Full autonomy on when and who you talk to.</p>
    </div>
    <div className="creator-tool-card">
    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="free-svg">
<g id="Group">
<circle id="Ellipse" cx="64" cy="64" r="13" stroke="#2B2730" stroke-width="4"/>
<circle id="Ellipse_2" cx="64" cy="64" r="58" stroke="#2B2730" stroke-width="4"/>
<path id="Ellipse_3" d="M108.669 57.2552C112.816 60.8732 112.816 67.1268 108.669 70.7448C102.77 75.8903 94.664 82.5069 86.4208 87.8258C82.2994 90.4851 78.1818 92.795 74.3177 94.4346C70.4319 96.0835 66.9284 97 64 97C61.0716 97 57.5681 96.0835 53.6823 94.4346C49.8182 92.795 45.7006 90.4851 41.5792 87.8258C33.336 82.5069 25.2303 75.8903 19.3315 70.7448C15.1838 67.1268 15.1838 60.8732 19.3315 57.2552C25.2303 52.1097 33.336 45.4931 41.5792 40.1742C45.7006 37.5149 49.8182 35.205 53.6823 33.5654C57.5681 31.9165 61.0716 31 64 31C66.9284 31 70.4319 31.9165 74.3177 33.5654C78.1818 35.205 82.2994 37.5149 86.4208 40.1742C94.664 45.4931 102.77 52.1097 108.669 57.2552Z" stroke="#2B2730" stroke-width="4"/>
</g>
</g>
</svg>
<h1 className="creator-tool-name"> Free </h1>
<p className="creator-tool-description">No monthly fee or sign-up fee</p>
    </div>
    <div className="creator-tool-card">
    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="earn-svg">
<g id="Group">
<path id="Rectangle" d="M54.0152 18.1886C57.9919 11.3419 67.8492 11.2537 71.9479 18.0281L96.2116 58.132L108.343 78.184L120.475 98.236C124.679 105.183 119.676 114.056 111.557 114.056H16.4427C8.40622 114.056 3.39245 105.346 7.42877 98.3966L19.0754 78.3446L30.722 58.2926L54.0152 18.1886Z" stroke="#2B2730" stroke-width="4"/>
</g>
</g>
</svg>
<h1 className="creator-tool-name"> Earn </h1>
<p className="creator-tool-description">Add a new source of income that you can control</p>
    </div>
  </div>
</div>
<div class='dummy-class'>
<div className='engage-card'>
  <h1 className='engage-title'>Engage without limits</h1>
  <p className='engage-description'>Join a growing community and talk directly with your favorites creators</p>
  <button className='engage-button'>
    Get Started
  </button>
</div>
</div>
<div className='support-card'>
<div className='support-logo-card'>
  <svg className='support-logo' xmlns="http://www.w3.org/2000/svg" width="97" height="32" viewBox="0 0 97 32" fill="none">
<path d="M16.1676 10.608L7.76759 30.36H3.35159L6.42359 23.544L0.975586 10.608H5.55959L8.65559 18.984L11.7276 10.608H16.1676Z" fill="#2B2730"/>
<path d="M23.7476 24.192C22.4356 24.192 21.2516 23.912 20.1956 23.352C19.1556 22.792 18.3316 21.992 17.7236 20.952C17.1316 19.912 16.8356 18.696 16.8356 17.304C16.8356 15.928 17.1396 14.72 17.7476 13.68C18.3556 12.624 19.1876 11.816 20.2436 11.256C21.2996 10.696 22.4836 10.416 23.7956 10.416C25.1076 10.416 26.2916 10.696 27.3476 11.256C28.4036 11.816 29.2356 12.624 29.8436 13.68C30.4516 14.72 30.7556 15.928 30.7556 17.304C30.7556 18.68 30.4436 19.896 29.8196 20.952C29.2116 21.992 28.3716 22.792 27.2996 23.352C26.2436 23.912 25.0596 24.192 23.7476 24.192ZM23.7476 20.64C24.5316 20.64 25.1956 20.352 25.7396 19.776C26.2996 19.2 26.5796 18.376 26.5796 17.304C26.5796 16.232 26.3076 15.408 25.7636 14.832C25.2356 14.256 24.5796 13.968 23.7956 13.968C22.9956 13.968 22.3316 14.256 21.8036 14.832C21.2756 15.392 21.0116 16.216 21.0116 17.304C21.0116 18.376 21.2676 19.2 21.7796 19.776C22.3076 20.352 22.9636 20.64 23.7476 20.64Z" fill="#2B2730"/>
<path d="M32.1169 17.28C32.1169 15.904 32.3729 14.696 32.8849 13.656C33.4129 12.616 34.1249 11.816 35.0209 11.256C35.9169 10.696 36.9169 10.416 38.0209 10.416C38.9009 10.416 39.7009 10.6 40.4209 10.968C41.1569 11.336 41.7329 11.832 42.1489 12.456V6.23999H46.2529V24H42.1489V22.08C41.7649 22.72 41.2129 23.232 40.4929 23.616C39.7889 24 38.9649 24.192 38.0209 24.192C36.9169 24.192 35.9169 23.912 35.0209 23.352C34.1249 22.776 33.4129 21.968 32.8849 20.928C32.3729 19.872 32.1169 18.656 32.1169 17.28ZM42.1489 17.304C42.1489 16.28 41.8609 15.472 41.2849 14.88C40.7249 14.288 40.0369 13.992 39.2209 13.992C38.4049 13.992 37.7089 14.288 37.1329 14.88C36.5729 15.456 36.2929 16.256 36.2929 17.28C36.2929 18.304 36.5729 19.12 37.1329 19.728C37.7089 20.32 38.4049 20.616 39.2209 20.616C40.0369 20.616 40.7249 20.32 41.2849 19.728C41.8609 19.136 42.1489 18.328 42.1489 17.304Z" fill="#2B2730"/>
<path d="M55.318 24.192C54.006 24.192 52.822 23.912 51.766 23.352C50.726 22.792 49.902 21.992 49.294 20.952C48.702 19.912 48.406 18.696 48.406 17.304C48.406 15.928 48.71 14.72 49.318 13.68C49.926 12.624 50.758 11.816 51.814 11.256C52.87 10.696 54.054 10.416 55.366 10.416C56.678 10.416 57.862 10.696 58.918 11.256C59.974 11.816 60.806 12.624 61.414 13.68C62.022 14.72 62.326 15.928 62.326 17.304C62.326 18.68 62.014 19.896 61.39 20.952C60.782 21.992 59.942 22.792 58.87 23.352C57.814 23.912 56.63 24.192 55.318 24.192ZM55.318 20.64C56.102 20.64 56.766 20.352 57.31 19.776C57.87 19.2 58.15 18.376 58.15 17.304C58.15 16.232 57.878 15.408 57.334 14.832C56.806 14.256 56.15 13.968 55.366 13.968C54.566 13.968 53.902 14.256 53.374 14.832C52.846 15.392 52.582 16.216 52.582 17.304C52.582 18.376 52.838 19.2 53.35 19.776C53.878 20.352 54.534 20.64 55.318 20.64Z" fill="#2B2730"/>
<path d="M68.6072 12.84C69.0872 12.104 69.6872 11.528 70.4072 11.112C71.1272 10.68 71.9272 10.464 72.8072 10.464V14.808H71.6792C70.6552 14.808 69.8872 15.032 69.3752 15.48C68.8632 15.912 68.6072 16.68 68.6072 17.784V24H64.5032V10.608H68.6072V12.84Z" fill="#2B2730"/>
<path d="M73.9528 17.28C73.9528 15.904 74.2088 14.696 74.7208 13.656C75.2488 12.616 75.9608 11.816 76.8568 11.256C77.7528 10.696 78.7528 10.416 79.8568 10.416C80.8008 10.416 81.6248 10.608 82.3288 10.992C83.0488 11.376 83.6008 11.88 83.9848 12.504V10.608H88.0888V24H83.9848V22.104C83.5848 22.728 83.0248 23.232 82.3048 23.616C81.6008 24 80.7768 24.192 79.8328 24.192C78.7448 24.192 77.7528 23.912 76.8568 23.352C75.9608 22.776 75.2488 21.968 74.7208 20.928C74.2088 19.872 73.9528 18.656 73.9528 17.28ZM83.9848 17.304C83.9848 16.28 83.6968 15.472 83.1208 14.88C82.5608 14.288 81.8728 13.992 81.0568 13.992C80.2408 13.992 79.5448 14.288 78.9688 14.88C78.4088 15.456 78.1288 16.256 78.1288 17.28C78.1288 18.304 78.4088 19.12 78.9688 19.728C79.5448 20.32 80.2408 20.616 81.0568 20.616C81.8728 20.616 82.5608 20.32 83.1208 19.728C83.6968 19.136 83.9848 18.328 83.9848 17.304Z" fill="#2B2730"/>
<circle cx="92" cy="22.5" r="2" fill="#FFB84C"/>
</svg>
<div className="company-logo-card">
<svg className='company-logo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 10.2V14.1875C3 16.8181 3 18.1334 3.59458 19.0984C3.92224 19.6301 4.36988 20.0778 4.90164 20.4054C5.86658 21 7.18189 21 9.8125 21H13.8C16.7998 21 18.2997 21 19.3511 20.2361C19.6907 19.9893 19.9893 19.6907 20.2361 19.3511C21 18.2997 21 16.7998 21 13.8V10.2C21 7.20021 21 5.70032 20.2361 4.64886C19.9893 4.30928 19.6907 4.01065 19.3511 3.76393C18.2997 3 16.7998 3 13.8 3H10.2C7.20021 3 5.70032 3 4.64886 3.76393C4.30928 4.01065 4.01065 4.30928 3.76393 4.64886C3 5.70032 3 7.20021 3 10.2Z" stroke="#2B2730" stroke-width="1.5"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.638 9.49555C14.2538 9.89017 14.2778 10.2119 14.2778 10.8986V11.9809H16.8333L16.3125 14.1455H14.2778V21H11.9444V14.1455H10V11.9809H11.9444V10.8986C11.9444 10.1423 12.0484 8.92591 12.9064 8.04465C13.8734 7.05154 15.0556 6.79439 17 7.15515V9.31974C15.4916 8.9381 14.8412 9.28681 14.638 9.49555Z" fill="#2B2730"/>
</svg>
<svg className='company-logo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 18.099C15.8681 21.7976 19.0851 13.219 19.0851 8.46739L21 6.54106L19.0851 7L20.234 5L17.9362 5.77053C13.034 3.61304 11.8085 7.44001 11.8085 9.62319C9.35745 11.1642 5.68085 7.69686 4.14894 5.77053C3.53617 7.31159 4.91489 9.49476 5.68085 10.3937H3.38298C3.68936 11.3184 5.80851 12.8337 6.82979 13.4758L4.91489 14.2464C5.52766 16.0957 7.7234 16.3011 8.74468 16.1727C8.4383 17.0973 4.78723 17.8422 3 18.099Z" stroke="#2B2730" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg className='company-logo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10.2 21H13.8C16.7998 21 18.2997 21 19.3511 20.2361C19.6907 19.9893 19.9893 19.6907 20.2361 19.3511C21 18.2997 21 16.7998 21 13.8V10.2C21 7.20021 21 5.70032 20.2361 4.64886C19.9893 4.30928 19.6907 4.01065 19.3511 3.76393C18.2997 3 16.7998 3 13.8 3H10.2C7.20021 3 5.70032 3 4.64886 3.76393C4.30928 4.01065 4.01065 4.30928 3.76393 4.64886C3 5.70032 3 7.20021 3 10.2V13.8C3 16.7998 3 18.2997 3.76393 19.3511C4.01065 19.6907 4.30928 19.9893 4.64886 20.2361C5.70032 21 7.20021 21 10.2 21Z" stroke="#2B2730" stroke-width="1.5"/>
  <circle cx="12" cy="12" r="4" stroke="#2B2730" stroke-width="1.5"/>
  <circle cx="17" cy="7" r="1" fill="#2B2730"/>
</svg>
</div>
  </div>
  <div className='support-tools-card'>
  <div className='support-tool-items'>
    <h1 className='support-tool'> About </h1>
    <p className='tool-item'>How it works</p>
    <p className='tool-item'>Company</p>
    <p className='tool-item'>Help & support</p>
  </div>
  <div className='support-tool-items'>
     <h1 className='support-tool'>For creators</h1>
    <p className='tool-item'>How can I get paid</p>
    <p className='tool-item'>Become a creator</p>
  </div>
  <div className='support-tool-items'>
    <h1 className='support-tool'> Learn </h1>
    <p className='tool-item'>Blog</p>
    <p className='tool-item'>Cookies policy</p>
    <p className='tool-item'>Privacy policy</p>
  </div>
  <div className='support-tool-items'>
    <h1 className='support-tool'> Support </h1>
    <p className='tool-item'>Service status</p>
    <p className='tool-item'>Report abuse</p>
    <p className='tool-item'>Dispute a payment</p>
  </div>
</div>
<div className='support-mobile-logo-card'>
<div className='support-mobile-logo-card'>
  <svg className='support-logo' xmlns="http://www.w3.org/2000/svg" width="97" height="32" viewBox="0 0 97 32" fill="none">
<path d="M16.1676 10.608L7.76759 30.36H3.35159L6.42359 23.544L0.975586 10.608H5.55959L8.65559 18.984L11.7276 10.608H16.1676Z" fill="#2B2730"/>
<path d="M23.7476 24.192C22.4356 24.192 21.2516 23.912 20.1956 23.352C19.1556 22.792 18.3316 21.992 17.7236 20.952C17.1316 19.912 16.8356 18.696 16.8356 17.304C16.8356 15.928 17.1396 14.72 17.7476 13.68C18.3556 12.624 19.1876 11.816 20.2436 11.256C21.2996 10.696 22.4836 10.416 23.7956 10.416C25.1076 10.416 26.2916 10.696 27.3476 11.256C28.4036 11.816 29.2356 12.624 29.8436 13.68C30.4516 14.72 30.7556 15.928 30.7556 17.304C30.7556 18.68 30.4436 19.896 29.8196 20.952C29.2116 21.992 28.3716 22.792 27.2996 23.352C26.2436 23.912 25.0596 24.192 23.7476 24.192ZM23.7476 20.64C24.5316 20.64 25.1956 20.352 25.7396 19.776C26.2996 19.2 26.5796 18.376 26.5796 17.304C26.5796 16.232 26.3076 15.408 25.7636 14.832C25.2356 14.256 24.5796 13.968 23.7956 13.968C22.9956 13.968 22.3316 14.256 21.8036 14.832C21.2756 15.392 21.0116 16.216 21.0116 17.304C21.0116 18.376 21.2676 19.2 21.7796 19.776C22.3076 20.352 22.9636 20.64 23.7476 20.64Z" fill="#2B2730"/>
<path d="M32.1169 17.28C32.1169 15.904 32.3729 14.696 32.8849 13.656C33.4129 12.616 34.1249 11.816 35.0209 11.256C35.9169 10.696 36.9169 10.416 38.0209 10.416C38.9009 10.416 39.7009 10.6 40.4209 10.968C41.1569 11.336 41.7329 11.832 42.1489 12.456V6.23999H46.2529V24H42.1489V22.08C41.7649 22.72 41.2129 23.232 40.4929 23.616C39.7889 24 38.9649 24.192 38.0209 24.192C36.9169 24.192 35.9169 23.912 35.0209 23.352C34.1249 22.776 33.4129 21.968 32.8849 20.928C32.3729 19.872 32.1169 18.656 32.1169 17.28ZM42.1489 17.304C42.1489 16.28 41.8609 15.472 41.2849 14.88C40.7249 14.288 40.0369 13.992 39.2209 13.992C38.4049 13.992 37.7089 14.288 37.1329 14.88C36.5729 15.456 36.2929 16.256 36.2929 17.28C36.2929 18.304 36.5729 19.12 37.1329 19.728C37.7089 20.32 38.4049 20.616 39.2209 20.616C40.0369 20.616 40.7249 20.32 41.2849 19.728C41.8609 19.136 42.1489 18.328 42.1489 17.304Z" fill="#2B2730"/>
<path d="M55.318 24.192C54.006 24.192 52.822 23.912 51.766 23.352C50.726 22.792 49.902 21.992 49.294 20.952C48.702 19.912 48.406 18.696 48.406 17.304C48.406 15.928 48.71 14.72 49.318 13.68C49.926 12.624 50.758 11.816 51.814 11.256C52.87 10.696 54.054 10.416 55.366 10.416C56.678 10.416 57.862 10.696 58.918 11.256C59.974 11.816 60.806 12.624 61.414 13.68C62.022 14.72 62.326 15.928 62.326 17.304C62.326 18.68 62.014 19.896 61.39 20.952C60.782 21.992 59.942 22.792 58.87 23.352C57.814 23.912 56.63 24.192 55.318 24.192ZM55.318 20.64C56.102 20.64 56.766 20.352 57.31 19.776C57.87 19.2 58.15 18.376 58.15 17.304C58.15 16.232 57.878 15.408 57.334 14.832C56.806 14.256 56.15 13.968 55.366 13.968C54.566 13.968 53.902 14.256 53.374 14.832C52.846 15.392 52.582 16.216 52.582 17.304C52.582 18.376 52.838 19.2 53.35 19.776C53.878 20.352 54.534 20.64 55.318 20.64Z" fill="#2B2730"/>
<path d="M68.6072 12.84C69.0872 12.104 69.6872 11.528 70.4072 11.112C71.1272 10.68 71.9272 10.464 72.8072 10.464V14.808H71.6792C70.6552 14.808 69.8872 15.032 69.3752 15.48C68.8632 15.912 68.6072 16.68 68.6072 17.784V24H64.5032V10.608H68.6072V12.84Z" fill="#2B2730"/>
<path d="M73.9528 17.28C73.9528 15.904 74.2088 14.696 74.7208 13.656C75.2488 12.616 75.9608 11.816 76.8568 11.256C77.7528 10.696 78.7528 10.416 79.8568 10.416C80.8008 10.416 81.6248 10.608 82.3288 10.992C83.0488 11.376 83.6008 11.88 83.9848 12.504V10.608H88.0888V24H83.9848V22.104C83.5848 22.728 83.0248 23.232 82.3048 23.616C81.6008 24 80.7768 24.192 79.8328 24.192C78.7448 24.192 77.7528 23.912 76.8568 23.352C75.9608 22.776 75.2488 21.968 74.7208 20.928C74.2088 19.872 73.9528 18.656 73.9528 17.28ZM83.9848 17.304C83.9848 16.28 83.6968 15.472 83.1208 14.88C82.5608 14.288 81.8728 13.992 81.0568 13.992C80.2408 13.992 79.5448 14.288 78.9688 14.88C78.4088 15.456 78.1288 16.256 78.1288 17.28C78.1288 18.304 78.4088 19.12 78.9688 19.728C79.5448 20.32 80.2408 20.616 81.0568 20.616C81.8728 20.616 82.5608 20.32 83.1208 19.728C83.6968 19.136 83.9848 18.328 83.9848 17.304Z" fill="#2B2730"/>
<circle cx="92" cy="22.5" r="2" fill="#FFB84C"/>
</svg>
<div className="company-mobile-logo-card">
<svg className='company-mobile-logo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 10.2V14.1875C3 16.8181 3 18.1334 3.59458 19.0984C3.92224 19.6301 4.36988 20.0778 4.90164 20.4054C5.86658 21 7.18189 21 9.8125 21H13.8C16.7998 21 18.2997 21 19.3511 20.2361C19.6907 19.9893 19.9893 19.6907 20.2361 19.3511C21 18.2997 21 16.7998 21 13.8V10.2C21 7.20021 21 5.70032 20.2361 4.64886C19.9893 4.30928 19.6907 4.01065 19.3511 3.76393C18.2997 3 16.7998 3 13.8 3H10.2C7.20021 3 5.70032 3 4.64886 3.76393C4.30928 4.01065 4.01065 4.30928 3.76393 4.64886C3 5.70032 3 7.20021 3 10.2Z" stroke="#2B2730" stroke-width="1.5"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.638 9.49555C14.2538 9.89017 14.2778 10.2119 14.2778 10.8986V11.9809H16.8333L16.3125 14.1455H14.2778V21H11.9444V14.1455H10V11.9809H11.9444V10.8986C11.9444 10.1423 12.0484 8.92591 12.9064 8.04465C13.8734 7.05154 15.0556 6.79439 17 7.15515V9.31974C15.4916 8.9381 14.8412 9.28681 14.638 9.49555Z" fill="#2B2730"/>
</svg>
<svg className='company-mobile-logo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 18.099C15.8681 21.7976 19.0851 13.219 19.0851 8.46739L21 6.54106L19.0851 7L20.234 5L17.9362 5.77053C13.034 3.61304 11.8085 7.44001 11.8085 9.62319C9.35745 11.1642 5.68085 7.69686 4.14894 5.77053C3.53617 7.31159 4.91489 9.49476 5.68085 10.3937H3.38298C3.68936 11.3184 5.80851 12.8337 6.82979 13.4758L4.91489 14.2464C5.52766 16.0957 7.7234 16.3011 8.74468 16.1727C8.4383 17.0973 4.78723 17.8422 3 18.099Z" stroke="#2B2730" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg className='company-mobile-logo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10.2 21H13.8C16.7998 21 18.2997 21 19.3511 20.2361C19.6907 19.9893 19.9893 19.6907 20.2361 19.3511C21 18.2997 21 16.7998 21 13.8V10.2C21 7.20021 21 5.70032 20.2361 4.64886C19.9893 4.30928 19.6907 4.01065 19.3511 3.76393C18.2997 3 16.7998 3 13.8 3H10.2C7.20021 3 5.70032 3 4.64886 3.76393C4.30928 4.01065 4.01065 4.30928 3.76393 4.64886C3 5.70032 3 7.20021 3 10.2V13.8C3 16.7998 3 18.2997 3.76393 19.3511C4.01065 19.6907 4.30928 19.9893 4.64886 20.2361C5.70032 21 7.20021 21 10.2 21Z" stroke="#2B2730" stroke-width="1.5"/>
  <circle cx="12" cy="12" r="4" stroke="#2B2730" stroke-width="1.5"/>
  <circle cx="17" cy="7" r="1" fill="#2B2730"/>
</svg>
</div>
</div>
</div>
</div></div>

)

export default App;
