export function toFillStore () {
  const arr = [...new Array(10000)].map(
    () => Array(100).fill().map(()=>"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.random()*52)).join(""))
  localStorage.setItem('array', JSON.stringify(arr));
}

export function toSearch ({ commit }, searchValue) {
  const array = JSON.parse(localStorage.getItem("array"))
  const sortedArr = quickSort(array)
  commit('setSearchResult', binarySearch(sortedArr, searchValue))
}

function sorting (List) {
  if (List.length <= 1) {
    return List;
  }

  const pivot = List[List.length - 1];
  const leftList = [];
  const rightList = [];

  for (let i = 0; i < List.length - 1; i++) {
      if (List[i] < pivot) {
          leftList.push(List[i]);
      }
      else {
          rightList.push(List[i])
      }
  }
  return [...sorting(leftList), pivot, ...sorting(rightList)]
}

const quickSort = (unsortedArray) => {
  const sortedArray = sorting(unsortedArray);
  return sortedArray;
}


function binarySearch(array, item) {
  let start = 0
  let end = array.length
  let middle;
  let result = []
  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (array[middle].slice(0, item.length) === item) {
        result.push(array[middle])
    }
    if (item < array[middle].slice(0, item.length)) {
        end = middle - 1
    } else {
        start = middle + 1
    }
  }
  return result
  
}

