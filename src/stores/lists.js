import { writable } from "svelte/store";

export const lists = writable([]);

export const addList = list => lists.update(lists => lists.push(list));
