
const NavBar = () =>{
    return(
      //main 
      <nav className="relative flex flex-no-wrap items-center justify-between w-full py-2 shadow-md bg-neutral-100 shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4" data-te-navbar-ref>
        <div className="flex items-end justify-between px-3 w-full-wrap">
        
          <button
          className="block px-2 bg-transparent border-0 text bg-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-one focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navBarSupportedContent1"
            aria-controls="navBarsupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="[&>svg]:w-7">
            <svg
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7">
            <path fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd" />
            </svg>
            </span>
          </button>
          
          <div className="!visible hidden flex-grow basis[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent1"
          data-te-collapse-item >
          
          {/* <a
          className="flex items-center mt-3 mb-4 mr-2 text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
          href="#">
          <img
            src={"https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"}
            style="height: 15px"
            alt=""
            loading="lazy"
            />
        </a> */}
            
            <ul 
              className="flex-col pl-0 mr-auto list-style-none lg:flex-row"
              data-te-navbar-nav-ref>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a 
              className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400" 
              href="#"
              data-te-env-nav-link-ref
              >habitaciones |</a>
                
              </li>
                
              </ul>
          </div>
        </div>
      </nav>
    )
}
export default NavBar;