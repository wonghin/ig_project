import { Box, Input } from 'native-base'
import React from 'react'
import { Feather } from '@expo/vector-icons';

interface Props {
    width?: number | string
}

export const SearchItem = () => {
    return (
        <Box alignItems={'center'} mb={2} bg={'white'}>
            <Input

                leftElement={
                    <Box pl={2} mr={-1} >
                        <Feather name="search" size={18} color="gray" />
                    </Box>
                }
                placeholder='Search' _input={{ color: 'black', h: 10, }}
            />
        </Box>
    )
}
