import {writable} from "svelte/store";
import { THEMES } from "../config/Constants";

export const svelteStoreTheme = writable<string>(THEMES.LIGHT);
