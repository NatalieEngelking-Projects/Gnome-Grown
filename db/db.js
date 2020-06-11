const { Pool, Client } = require('pg');

const pool = new Pool({
  "user": "gnome",
  "host": "localhost",
  "database" : "gnomegrown",
  "password" : "Gnomeo",
  "port": 5432
})

pool.on('error', (err) => {
  console.error('experienced an error', err.stack);
})

//QUERIES



const insertDivision = async (each) => {
  const insertStrDivison = 'INSERT INTO division (id, slug, division_name) VALUES ($1, $2, $3)'
  try {
    await pool.query(insertStrDivison, [each.id, each.slug, each.name])
  } 
  catch (err) {
    console.log(err)
  }
}

const insertFamily = async (each) => {
  const insertStrFam = 'INSERT INTO family (id, slug, family_name) VALUES ($1, $2, $3)'
  try {
    await pool.query(insertStrFam, [each.id, each.slug, each.name])
  } 
  catch (err) {
    console.log(err)
  }
}

const insertGenus = async (each) => {
  const insertStrGenus = 'INSERT INTO genus (id, slug, genus_name, division_id, family_id) VALUES ($1, $2, $3, $4, $5)'
  try {
    if (each.division === null) {
      each.division = 'empty';
      each.division.id = -1;
    }
    if (each.family === null) {
      each.family = 'empty';
      each.family.id = -1;
    }
    await pool.query(insertStrGenus, [each.id, each.slug, each.name, each.division.id, each.family.id])
  } 
  catch (err) {
    console.log(err)
  }
}

// const insertPlant = async (each) => {
//   const insertMatureHeight = 'INSERT INTO mature_height (id, inches, cm) VALUES ($1, $2, $3)'
//   const insertMax_Height = 'INSERT INTO max_height_at_base_age (id, inches, cm) VALUES ($1, $2, $3)'
//   const insertSpec = 'INSERT INTO specifications (id,  toxicity, shape_and_orientation, regrowth_rate, nitrogen_fixation, low_growing_grass, lifespan, leaf_retention, known_allelopath, growth_rate, growth_period, growth_habit, growth_form, fire_resistance, fall_conspicuous, coppice_potential, c_n_ratio, bloat, max_height_at_base_age_id, mature_height_id ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)'
//   const insertSoils = 'INSERT INTO soils_adaptation (id, fine, medium, coarse) VALUES ($1, $2, $3, $4)'
//   const insertSeed = 'INSERT INTO seed (id, speed_spread_rate, vegetative_spread_rate, small_grain, seeds_per_pound, seedling_vigor, commercial_availability, bloom_period) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
//   const insertPropagation = 'INSERT INTO propagation (id, tubers, sprigs, sod, seed, cuttings, corms, container, bulbs, bare_root) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'
//   const insertProducts = 'INSERT INTO products (id, veneer, pulpwood, protein_potential, post, palatable_human, palatable_grazing_animal, palatable_browse_animal, nursery_stock, naval_store, lumber, fuelwood, fodder, christmas_tree, berry_nut_seed) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)'
//   const insertImages = 'INSERT INTO products (id, url) VALUES ($1, $2)'
//   const insertTempMin = 'INSERT INTO temperature_min (id, deg_f, deg_c) VALUES ($1, $2, $3)'
//   const insertRootDepth = 'INSERT INTO root_depth_min (id, inches, cm) VALUES ($1, $2, $3)'
//   const insertPrecipitationMin = 'INSERT INTO precipitation_minimum (id, inches, cm) VALUES ($1, $2, $3)'
//   const insertPrecipitationMax = 'INSERT INTO precipitation_maximum (id, inches, cm) VALUES ($1, $2, $3)'
//   const insertPlantingMin = 'INSERT INTO planting_density_minimum (id, sqm, acre) VALUES ($1, $2, $3)'
//   const insertPlantingMax = 'INSERT INTO planting_density_maximum (id, sqm, acre) VALUES ($1, $2, $3)'
//   const insertGrowth = 'INSERT INTO products (id, ph_min, ph_max, moisture_use, frost_free_days_min, fertility_req, resprout_ability, cold_stratification_req, shade_tolerance, salinity_tolerance, hedge_tolerance, fire_tolerance, drought_tolerance, caco_3_tolerance, anaerobic_tolerance, temperature_min_id, root_depth_min_id, precipitation_min_id, precipitation_max_id, planting_density_min_id, planting_density_max_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)'
//   const insertFruitSeed = 'INSERT INTO fruit_or_seed (id, seed_persistence, seed_period_end, seed_period_begin, seed_abundance, conspicuous, color) VALUES ($1, $2, $3, $4, $5, $6, $7)'
//   const insertFoliage = 'INSERT INTO foliage (id, texture, porosity_winter, porosity_summer, color) VALUES ($1, $2, $3, $4, $5)'
//   const insertFlower = 'INSERT INTO flower (id, color, conspicuous) VALUES ($1, $2, $3)'
//   const insertStrSpecies = 'INSERT INTO species (id, scientific_name, s_year, s_type, s_synonym, s_status, slug, images_id, main_species_id, is_main_species, complete_data, flower_id, foliage_id, fruit_or_seed_id, growth_id, products_id, propagation_id, seed_id, soils_adaption_id, specifications_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)'
//   try {
//     console.log(each)
//     console.log('----------------------------------------------------------------------------')
//     await pool.query(insertMatureHeight, [each.specifications.mature_height.id, each.specifications.mature_height.inches, each.specifications.mature_height.cm])
//     await pool.query(insertMax_Height, [each.specifications.max_height_at_base_age.id, each.specifications.max_height_at_base_age.inches, each.specifications.max_height_at_base_age.cm])
//     await pool.query(insertSpec, [each.specifications.id, each.specifications.toxicity, each.specifications.shape_and_orientation, each.specifications.regrowth_rate, each.specifications.nitrogen_fixation, each.specifications.low_growing_grass, each.specifications.lifespan, each.specifications.leaf_retention, each.specifications.known_allelopath, each.specifications.growth_rate, each.specifications.growth_period, each.specifications.growth_habit, each.specifications.growth_form, each.specifications.fire_resistance, each.specifications.fall_conspicuous, each.specifications.coppice_potential, each.specifications.c_n_ratio, each.specifications.bloat, each.specifications.max_height_at_base_age.id, each.specifications.mature_height.id])
//     // await pool.query(insertSoils, [each.id, each.fine, each.medium, each.coarse])
//     // await pool.query(insertSeed, [each.id, each.speed_spread_rate, each.vegetative_spread_rate, each.small_grain, each.seeds_per_pound, each.seedling_vigor, each.commercial_availability, each.bloom_period])
//     // await pool.query(insertPropagation, [each.id, each.tubers, each.sprigs, each.sod, each.seed, each.cuttings, each.corms, each.container, each.bulbs, each.bare_root])
//     // await pool.query(insertProducts, [each.id, each.veneer, each.pulpwood, each.protein_potential, each.post, each.palatable_human, each.palatable_grazing_animal, each.palatable_browse_animal, each.nursery_stock, each.naval_store, each.lumber, each.fuelwood, each.fodder, each.christmas_tree, each.berry_nut_seed])
//     // await pool.query(insertImages, [each.id, each.map((image) => { 
//     //   let imageArr = []
//     //   imageArr.push(image.url)
//     //   return imageArr;
//     // }) ])

//     // await pool.query(insertTempMin, [each.id, each.deg_f, each.deg_c])
//     // await pool.query(insertRootDepth, [each.id, each.inches, each.cm])
//     // await pool.query(insertPrecipitationMin, [each.id, each.inches, each.cm])
//     // await pool.query(insertPrecipitationMax, [each.id, each.inches, each.cm])
//     // await pool.query(insertPlantingMin, [each.id, each.sqm, each.acre])
//     // await pool.query(insertPlantingMax, [each.id, each.sqm, each.acre])
//     // await pool.query(insertGrowth, [each.id, each.ph_min, each.ph_max, each.moisture_use, each.frost_free_days_min, each.fertility_req, each.resprout_ability, each.cold_stratification_req, each.shade_tolerance, each.salinity_tolerance, each.hedge_tolerance, each.fire_tolerance, each.drought_tolerance, each.caco_3_tolerance, each.anaerobic_tolerance, each.temperature_min.id, each.root_depth_min.id, each.precipitation_min.id, each.precipitation_max.id, each.planting_density_min.id, each.planting_density_max.id])
//     // await pool.query(insertFruitSeed, [each.id, each.seed_persistence, each.seed_period_end, each.seed_period_begin, each.seed_abundance, each.conspicuous, each.color])
//     // await pool.query(insertFoliage, [each.id, each.texture, each.porosity_winter, each.porosity_summer, each.color])
//     // await pool.query(insertFlower, [each.id, each.color, each.conspicuous])
//     // await pool.query(insertStrSpecies, [each.id, each.scientific_name, each.year, each.type, each.synonym, each.status, each.slug, each.image.id, each.main_species_id, each.complete_data, each.flower.id, each.foliage.id, each.fruit_or_seed.id, each.growth.id, each.products.id, each.propagation.id, each.seed.id, each.soils_adaption.id, each.specifications.id])
//   } 
//   catch (err) {
//     console.log(err)
//   }
// }

module.exports = {
  insertDivision,
  insertFamily,
  insertGenus,
};

