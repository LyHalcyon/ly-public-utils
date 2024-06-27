import { formatDate } from './utils/date.format.utils';
import Base64 from './utils/base64.utils';
import localStorage from './utils/local.cache.utils';
import defaultUtils from './utils/default.utils';
import { deepCopy, flattenArray, buildTree } from './utils/array.format.utils';

defaultUtils.isName('123');
export { formatDate, Base64, localStorage, defaultUtils, deepCopy, flattenArray, buildTree };
