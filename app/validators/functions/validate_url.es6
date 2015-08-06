import {ValidationError}    from 'errors/validation_error';

// Returns a BOOL indicating whether or not the supplied URL appears to be valid
export function validateURL(url) {
  var uri = new URI(url); // TODO: explicitly require rather than globaly available

  if (
    uri.protocol() === null || (
      uri.protocol() !== 'http' &&
      uri.protocol() !== 'https'
    )
  ) {
    return false;
  }

  // URL is Valid
  return true;
}
