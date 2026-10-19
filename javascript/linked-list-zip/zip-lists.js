'use strict';

/**
 * Zips two linked lists together by alternating nodes.
 * Reuses the existing nodes without creating new ones.
 *
 * @param {LinkedList} list1 - First linked list
 * @param {LinkedList} list2 - Second linked list
 * @returns {LinkedList} The zipped linked list
 */
function zipLists(list1, list2) {
  if (!list1.head) {
    return list2;
  }

  if (!list2.head) {
    return list1;
  }

  let current1 = list1.head;
  let current2 = list2.head;

  while (current1 && current2) {
    let next1 = current1.next;
    let next2 = current2.next;

    current1.next = current2;

    if (!next1) {
      break;
    }

    current2.next = next1;

    current1 = next1;
    current2 = next2;
  }

  return list1;
}

module.exports = zipLists;
