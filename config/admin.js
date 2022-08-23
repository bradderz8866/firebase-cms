module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '69878bb29dcae30a4a3da86f3921264b'),
  },
});
