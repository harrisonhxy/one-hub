// material-ui
import { Link as MuiLink, Container } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';

// 创建一个样式化的footer组件
const StyledFooter = styled('footer')(({ theme }) => ({
  textAlign: 'center',
  fontSize: '14px',
  color: '#555',
  padding: '5px 0',
  '& p': {
    margin: '5px 0',
  },
  '& a': {
    color: '#007bff',
    textDecoration: 'none',
    marginRight: '5px',
    '&:hover': {
      textDecoration: 'underline',
      color: '#0056b3',
    }
  },
  '& .powered': {
    display: 'inline-block',
    marginLeft: '5px',
  }
}));

// ==============================|| FOOTER ||============================== //

const Footer = () => {
  const siteInfo = useSelector((state) => state.siteInfo);
  const { t } = useTranslation();

  return (
    <Container>
      {siteInfo.footer_html ? (
        <div className="custom-footer" dangerouslySetInnerHTML={{ __html: siteInfo.footer_html }}></div>
      ) : (
        <StyledFooter>
          <p>
            © {' '}
            <MuiLink href="https://harrizone.com" target="_blank">Harrizone.com</MuiLink>
            <span className="powered">Powered by</span>{' '}
            <MuiLink href="https://github.com/MartialBE/one-hub" target="_blank">One Hub</MuiLink>
          </p>
        </StyledFooter>
      )}
    </Container>
  );
};

export default Footer;