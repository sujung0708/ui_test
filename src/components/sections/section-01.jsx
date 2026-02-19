import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const VARIANTS = ['contained', 'outlined', 'text'];
const COLORS = ['primary', 'secondary', 'error'];

/**
 * Section01 컴포넌트 - Button UI 요소 섹션
 *
 * 표시 내용:
 * - variant(contained, outlined, text) × color(primary, secondary, error) 조합
 * - 클릭 시 variant와 color 정보를 알림창으로 표시
 *
 * Props: 없음
 *
 * Example usage:
 * <Section01 />
 */
function Section01() {
  const handleClick = (variant, color) => {
    alert(`[${variant}] [${color}] 버튼이 클릭되었습니다!`);
  };

  return (
    <Box sx={{ mb: 8 }}>
      <Typography variant='h5' component='h2' sx={{ mb: 0.5, fontWeight: 600 }}>
        01. Button
      </Typography>
      <Typography variant='body2' color='text.secondary' sx={{ mb: 4 }}>
        variant × color 조합 — contained / outlined / text × primary / secondary / error
      </Typography>

      <Grid container spacing={3}>
        {VARIANTS.map((variant) => (
          <Grid key={variant} size={{ xs: 12, md: 4 }}>
            <Typography
              variant='subtitle2'
              sx={{
                mb: 2,
                fontWeight: 700,
                textTransform: 'capitalize',
                color: 'text.secondary',
                letterSpacing: 0.5,
              }}
            >
              {variant}
            </Typography>
            <Stack spacing={2}>
              {COLORS.map((color) => (
                <Button
                  key={color}
                  variant={variant}
                  color={color}
                  onClick={() => handleClick(variant, color)}
                  fullWidth
                  sx={{ textTransform: 'capitalize' }}
                >
                  {color}
                </Button>
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mt: 6 }} />
    </Box>
  );
}

export default Section01;
