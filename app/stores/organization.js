import { Connect, mix } from 'fronto-connect';
import scopes from './scopes';

class Organization extends Connect {
  resource = 'organizations';
}

mix(Organization, scopes.readable);
mix(Organization, scopes.writable);

export default Organization;
