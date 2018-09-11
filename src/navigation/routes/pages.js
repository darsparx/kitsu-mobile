import ProfilePages from 'kitsu/screens/Profiles/ProfilePages';
import MediaPages from 'kitsu/screens/Profiles/MediaPages';
import UnitPage from 'kitsu/screens/Profiles/MediaPages/pages/Episodes/Unit';
import { UserLibraryListScreen } from 'kitsu/screens/Profiles';

import * as Screens from 'kitsu/navigation/types';

export default pageRoutes = {
  [Screens.PROFILE]: ProfilePages,
  [Screens.PROFILE_LIBRARY_LIST]: UserLibraryListScreen,
  [Screens.MEDIA_PAGE]: MediaPages,
  [Screens.MEDIA_PAGE_UNIT_DETAIL]: UnitPage,
};
