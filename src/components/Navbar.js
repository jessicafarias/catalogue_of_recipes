import '../styles/navbar.css';

const Navbar = () => (
  <div className="bgc-black navbar">
    <div className="row justify-content-center align-items-center">
      <p className="col-3">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60%"
            height="60%"
            fill="#FFFFFF"
            className="bi bi-gear-fill pr-2"
            viewBox="0 0 16 16"
          >
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
          </svg>
        </a>
      </p>
      <div className="col-6">
        <a className="regular" href="/">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 97 20"
            enableBackground="new 0 0 97 20"
          >
            <g>
              <path
                className="st0"
                d="M6.73,9.59h3.51c0.76,0.94,1.13,1.92,1.13,2.96c0,1.21-0.44,2.22-1.33,3.04c-0.89,0.82-1.97,1.23-3.27,1.23
              c-1.68,0-3.11-0.64-4.28-1.91c-1.17-1.27-1.76-2.83-1.76-4.66c0-1.84,0.6-3.37,1.79-4.59S5.21,3.84,7,3.84
              c0.61,0,1.29,0.12,2.03,0.37v3.68C8.45,7.62,7.92,7.49,7.44,7.49c-0.86,0-1.57,0.27-2.12,0.81s-0.82,1.24-0.82,2.09
              c0,0.88,0.25,1.57,0.76,2.08c0.51,0.51,1.19,0.77,2.06,0.77c0.55,0,0.82-0.16,0.82-0.48c0-0.24-0.18-0.36-0.54-0.36H6.73V9.59z"
              />
              <path
                className="st0"
                d="M18.73,3.84c1.75,0,3.25,0.64,4.51,1.91c1.25,1.28,1.88,2.8,1.88,4.58c0,1.81-0.63,3.34-1.89,4.6
              c-1.26,1.26-2.8,1.89-4.6,1.89c-1.79,0-3.33-0.63-4.6-1.9c-1.27-1.27-1.9-2.8-1.9-4.6c0-1.81,0.64-3.35,1.92-4.6
              S16.88,3.84,18.73,3.84z M18.62,7.49c-0.76,0-1.4,0.28-1.93,0.83c-0.53,0.56-0.8,1.23-0.8,2.01s0.27,1.46,0.8,2.01
              c0.54,0.56,1.18,0.83,1.93,0.83c0.76,0,1.41-0.28,1.94-0.83s0.79-1.22,0.79-2.02c0-0.79-0.26-1.46-0.79-2.02S19.38,7.49,18.62,7.49
              z"
              />
              <path
                className="st0"
                d="M32.71,3.84c1.75,0,3.25,0.64,4.51,1.91c1.25,1.28,1.88,2.8,1.88,4.58c0,1.81-0.63,3.34-1.89,4.6
              c-1.26,1.26-2.8,1.89-4.6,1.89c-1.79,0-3.33-0.63-4.6-1.9c-1.27-1.27-1.9-2.8-1.9-4.6c0-1.81,0.64-3.35,1.92-4.6
              S30.86,3.84,32.71,3.84z M32.6,7.49c-0.76,0-1.4,0.28-1.93,0.83c-0.53,0.56-0.8,1.23-0.8,2.01s0.27,1.46,0.8,2.01
              c0.54,0.56,1.18,0.83,1.93,0.83c0.76,0,1.41-0.28,1.94-0.83s0.79-1.22,0.79-2.02c0-0.79-0.26-1.46-0.79-2.02S33.36,7.49,32.6,7.49z
              "
              />
              <path
                className="st0"
                d="M44.51,7.7v8.82h-3.68V4.15h4.79c2.1,0,3.75,0.48,4.94,1.43c1.41,1.14,2.12,2.69,2.12,4.65
              c0,1.87-0.6,3.4-1.81,4.59c-1.21,1.18-2.76,1.78-4.67,1.78c-0.22,0-0.59-0.01-1.1-0.04v-3.63h0.59c2.15,0,3.22-0.9,3.22-2.69
              c0-1.69-1.05-2.53-3.16-2.53H44.51z"
              />
              <path className="st0" d="M63.31,4.15l-5.39,13.08L52.56,4.15h4.26l1.13,3.86l1.25-3.86H63.31z" />
              <path className="st0" d="M67.8,4.15v12.37h-3.68V4.15H67.8z" />
              <path
                className="st0"
                d="M70.27,4.15h4.5c2.67,0,4,1.05,4,3.15c0,1.04-0.46,1.9-1.37,2.59c1.32,0.57,1.99,1.6,1.99,3.07
              c0,1.13-0.39,2.03-1.17,2.7c-0.38,0.32-0.79,0.54-1.22,0.67c-0.44,0.13-1.02,0.19-1.76,0.19h-0.7v-3.18h0.63
              c0.37,0,0.63-0.05,0.78-0.14s0.23-0.26,0.23-0.49c0-0.4-0.31-0.6-0.92-0.6h-0.71v-3.3c0.68,0,1.01-0.23,1.01-0.7
              c0-0.43-0.3-0.64-0.92-0.64h-0.68v9.05h-3.68V4.15z"
              />
              <path
                className="st0"
                d="M87.46,8.96v2.75h-2.4c-0.33,0-0.56,0.05-0.69,0.15c-0.14,0.1-0.2,0.26-0.2,0.49c0,0.26,0.07,0.43,0.21,0.51
              c0.14,0.08,0.42,0.12,0.85,0.12h2.47v3.54h-2.89c-1.36,0-2.4-0.33-3.12-0.97s-1.08-1.59-1.08-2.81V7.88c0-1.18,0.34-2.1,1.02-2.75
              s1.64-0.98,2.87-0.98h3.2V7.7h-2.35c-0.63,0-0.95,0.21-0.95,0.62c0,0.24,0.08,0.41,0.23,0.5s0.42,0.14,0.81,0.14H87.46z"
              />
              <path
                className="st0"
                d="M95.62,4.1v3.53C95.35,7.53,95.15,7.49,95,7.49c-0.28,0-0.52,0.1-0.72,0.31c-0.2,0.21-0.3,0.45-0.3,0.74
              c0,0.25,0.11,0.56,0.33,0.94l0.28,0.49c0.51,0.88,0.76,1.73,0.76,2.56c0,1.2-0.43,2.22-1.28,3.05c-0.85,0.83-1.9,1.25-3.13,1.25
              c-0.59,0-1.18-0.14-1.76-0.41v-3.58c0.35,0.22,0.66,0.33,0.93,0.33c0.32,0,0.59-0.09,0.8-0.28c0.21-0.18,0.32-0.42,0.32-0.69
              c0-0.18-0.17-0.58-0.52-1.19c-0.55-0.97-0.83-1.93-0.83-2.9c0-1.17,0.42-2.17,1.25-3.01c0.83-0.84,1.82-1.26,2.98-1.26
              C94.63,3.84,95.13,3.93,95.62,4.1z"
              />
            </g>
          </svg>
        </a>
      </div>
      <div className="col-3">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50%"
            height="50%"
            fill="#FFFFFF"
            className="bi bi-search pr-1 ml-3"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export default Navbar;
