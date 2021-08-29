import { VersionGroupDetails } from './version-droup-details.model';
import { Version } from './version.model';

export interface Move {
  move: Version;
  version_group_details: VersionGroupDetails[];
}
