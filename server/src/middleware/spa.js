import { join } from 'path'

export default file => (req, res) => {
  console.log(join(__dirname, '../..', file))
  res.sendFile(join(__dirname, '../..', file));
}
