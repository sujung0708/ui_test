import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Section01 from './components/sections/section-01';

/** App 컴포넌트 - UI 요소 섹션 목록을 순차적으로 렌더링하는 메인 레이아웃 */
function App() {
  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      bgcolor: 'background.default',
      py: { xs: 4, md: 8 },
    }}>
      <Container maxWidth='lg'>
        <Typography
          variant='h3'
          component='h1'
          align='center'
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1.8rem', md: '2.5rem' },
            mb: 2,
          }}
        >
          UI Component Gallery
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='text.secondary'
          sx={{ mb: 6 }}
        >
          MUI 기반 16개 UI 요소 컴포넌트 모음
        </Typography>

        <Divider sx={{ mb: 6 }} />

        <Section01 />

      </Container>
    </Box>
  );
}

export default App;
