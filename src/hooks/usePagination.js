import { useMemo } from 'react'

const range = (start, end) => {
  let length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)

    const totalPageNumbers = siblingCount + 4
    if (totalPageNumbers >= totalCount) {
      return range(1, totalPageCount)
    }

    //const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    /*const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    )*/
  },[totalCount,pageSize,siblingCount,currentPage])
  return paginationRange
}
