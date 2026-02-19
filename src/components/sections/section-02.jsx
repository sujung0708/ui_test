import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

const VARIANTS = [
  { key: 'standard', label: 'Standard' },
  { key: 'outlined', label: 'Outlined' },
  { key: 'filled', label: 'Filled' },
];

/**
 * Section02 컴포넌트 - TextField(Input) UI 요소 섹션
 *
 * 표시 내용:
 * - variant(standard, outlined, filled) 3가지 TextField
 * - 각 TextField는 label, placeholder 설정
 * - 입력값 실시간 표시
 *
 * Props: 없음
 *
 * Example usage:
 * <Section02 />
 */
function Section02() {
  const [values, setValues] = useState({
    standard: '',
    outlined: '',
    filled: '',
  });

  const handleChange = (variant) => (e) => {
    setValues((prev) => ({ ...prev, [variant]: e.target.value }));
  };

  return (
    <Box sx={{ mb: 8 }}>
      <Typography variant='h5' component='h2' sx={{ mb: 0.5, fontWeight: 600 }}>
        02. Input
      </Typography>
      <Typography variant='body2' color='text.secondary' sx={{ mb: 4 }}>
        variant — standard / outlined / filled · 입력값 실시간 표시
      </Typography>

      <Grid container spacing={4}>
        {VARIANTS.map(({ key, label }) => (
          <Grid key={key} size={{ xs: 12, md: 4 }}>
            <Typography
              variant='subtitle2'
              sx={{
                mb: 2,
                fontWeight: 700,
                color: 'text.secondary',
                letterSpacing: 0.5,
              }}
            >
              {label}
            </Typography>

            <TextField
              variant={key}
              label={`${label} Input`}
              placeholder={`${label} 값을 입력하세요`}
              value={values[key]}
              onChange={handleChange(key)}
              fullWidth
            />

            <Box
              sx={{
                mt: 2,
                px: 1.5,
                py: 1,
                bgcolor: 'action.hover',
                borderRadius: 1,
                minHeight: 36,
              }}
            >
              <Typography variant='caption' color='text.secondary'>
                입력값:{' '}
              </Typography>
              <Typography
                variant='caption'
                color={values[key] ? 'text.primary' : 'text.disabled'}
                sx={{ fontWeight: values[key] ? 600 : 400 }}
              >
                {values[key] || '(없음)'}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mt: 6 }} />
    </Box>
  );
}

export default Section02;
