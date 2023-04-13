import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';




export default function TabelData({optionData}) {
    
console.log(optionData);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));
    



  return ( 
    <>
    { Object.keys(optionData).length > 0 && (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >

        <TableHead >
          <TableRow>
             <StyledTableCell align='left'>   الخصائص  </StyledTableCell>
             <StyledTableCell  align='center'>  البيانات  </StyledTableCell>
          </TableRow>
          </TableHead>

      
        
      
        <TableBody>
          <StyledTableRow>
             <StyledTableCell align='left'>   التصنيفات  </StyledTableCell>
             <StyledTableCell  align='center'>{optionData.title}</StyledTableCell>
          </StyledTableRow>
        <StyledTableRow>
        <StyledTableCell align='left'>   افرع التصنيفات  </StyledTableCell>    
        <StyledTableCell align="center">{optionData.subCate}</StyledTableCell>
        </StyledTableRow>
        
        <StyledTableRow>

        <StyledTableCell align='left'> نوع العملية </StyledTableCell>
        <StyledTableCell align="center"> {optionData.operationType} </StyledTableCell>
        </StyledTableRow>
      
        <StyledTableRow>
        <StyledTableCell align='left'> الماركة </StyledTableCell>
        <StyledTableCell align="center"> {optionData.brand} </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>

        <StyledTableCell align='left'>   الفئه  </StyledTableCell>
        <StyledTableCell align="center"> {optionData.brandOpitonOther} </StyledTableCell>
        </StyledTableRow>

      
        <StyledTableRow>

        <StyledTableCell align='left'>  نوع الجير </StyledTableCell>
        <StyledTableCell align="center"> {optionData.gear} </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>

        <StyledTableCell align='left'> نوع الوقود </StyledTableCell>
        <StyledTableCell align="center"> {optionData.feul} </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>

        <StyledTableCell align='left'> الحالة </StyledTableCell>
        <StyledTableCell align="center"> {optionData.condition} </StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>

        <StyledTableCell align='left'> اللون </StyledTableCell>
        <StyledTableCell align="center"> {optionData.color} </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>

        <StyledTableCell align='left'> العداد </StyledTableCell>
        <StyledTableCell align="center"> {optionData.counter} </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>

        <StyledTableCell align='left'> الوحده للعداد </StyledTableCell>
        <StyledTableCell align="center"> {optionData.unitCounter} </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>

        <StyledTableCell align='left'> عدد السلندر </StyledTableCell>
        <StyledTableCell align="center"> {optionData.cylinder} </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>

        <StyledTableCell align='left'> نوع القيادة </StyledTableCell>
        <StyledTableCell align="center"> {optionData.leaderShip} </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>

        <StyledTableCell align='left'> رقم الهيكل </StyledTableCell>
        <StyledTableCell align="center"> {optionData.structureNo} </StyledTableCell>
        </StyledTableRow>
        
        <StyledTableRow>

        <StyledTableCell align='left'> سنة الصنع </StyledTableCell>
        <StyledTableCell align="center"> {optionData.year} </StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>

        <StyledTableCell align='left'> بلد المنشأ </StyledTableCell>
        <StyledTableCell align="center"> {optionData.country} </StyledTableCell>
        </StyledTableRow>

        

        


        </TableBody>
      </Table>
    </TableContainer>
    ) }
    
    </>
  );
}