import dynamic from 'next/dynamic';
const  TableLazyLoading = dynamic(() => import('./TabelData'), { ssr: false })
export default TableLazyLoading