import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import HomeIcon from '@mui/icons-material/Home';

const NavBar = ({totalUniqueItems}) => {
  
  return (
    <AppBar position="static">
      <Toolbar>
      
        <IconButton color="inherit" edge="start" sx={{marginRight:'auto'}}>
          <HomeIcon   />
        </IconButton>
        <Box sx={{ display: 'flex' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '20px', fontSize:'20px' }}>
            Home
          </Link>
          <Link to="/Shop" style={{ color: 'white', textDecoration: 'none', marginRight: '20px',fontSize:'20px' }}>
            Shop
          </Link>
          <Link to="/Cartt" style={{ color: 'white', textDecoration: 'none'  }}>
            <IconButton 
            component={Link} 
            to="/Cartt" 
            color="inherit" 
            aria-label="cart" 
          >
            <Badge badgeContent={totalUniqueItems} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          </Link>
         
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
