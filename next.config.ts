import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
};

// Plugin, varsayılan olarak ./src/i18n/request.ts dosyasını bulur
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
