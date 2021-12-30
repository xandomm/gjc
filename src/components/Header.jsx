import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="border">
          <header  className="App-header">
        <div >
        <img 
        src="https://classi.com.br/assets/imgs/logo-classi.svg"
        className="App-logo" 
        alt="logo" 
        />
        
        </div>
        <div>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}

      >
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            fill="#FFFFFF" 
            class="bi bi-list" 
            viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>

            </svg>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>Olá Renata</MenuItem>
        <MenuItem id="menu-item" onClick={handleClose}>Dados do usuário</MenuItem>
        <MenuItem id="menu-item" onClick={handleClose}>Criar anúncio</MenuItem>
        <MenuItem id="menu-item" onClick={handleClose}>Carrinho</MenuItem>
        <MenuItem id="menu-item" onClick={handleClose}>Meus anúncios</MenuItem>
      </Menu>
        </div>
 
    </header>
    </div>

  );
}