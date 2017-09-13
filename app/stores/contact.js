import { Connect, mix } from 'fronto-connect';
import scopes from './scopes';

class Contact extends Connect {
  resource = 'contacts';
}

mix(Contact, scopes.readable);
mix(Contact, scopes.writable);

export default Contact;
