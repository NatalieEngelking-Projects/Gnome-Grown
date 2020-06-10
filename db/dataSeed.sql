CREATE ROLE gnome WITH PASSWORD 'Gnomeo';

CREATE DATABASE gnomegrown WITH OWNER gnome;

\c gnomegrown;

-----------connection to specifitcation
CREATE TABLE max_height_at_base_age (
  id SERIAL PRIMARY KEY,
  inches FLOAT, 
  cm FLOAT
);

CREATE TABLE mature_height (
  id SERIAL PRIMARY KEY,
  inches FLOAT, 
  cm FLOAT
);

CREATE TABLE specifications (
  id SERIAL PRIMARY KEY,
  toxicity VARCHAR, 
  shape_and_orientation VARCHAR,
  regrowth_rate VARCHAR,
  nitrogen_fixation VARCHAR,
  low_growing_grass VARCHAR,
  lifespan VARCHAR,
  leaf_retention BOOLEAN,
  known_allelopath VARCHAR, 
  growth_rate VARCHAR,
  growth_period VARCHAR,
  growth_habit VARCHAR,
  growth_form VARCHAR,
  fire_resistance VARCHAR,
  fall_conspicuous BOOLEAN,
  coppice_potential VARCHAR,
  c_n_ratio VARCHAR,
  bloat VARCHAR,
  max_height_at_base_age_id INT REFERENCES max_height_at_base_age(id),
  mature_height_id INT REFERENCES mature_height(id)
);


----------------connection to growth-----------------------
CREATE TABLE temperature_min (
  id SERIAL PRIMARY KEY,
  deg_f FLOAT,
  deg_c FLOAT
);

CREATE TABLE root_depth_min (
  id SERIAL PRIMARY KEY,
  inches FLOAT,
  cm FLOAT
);

CREATE TABLE precipitation_min (
  id SERIAL PRIMARY KEY,
  inches FLOAT,
  cm FLOAT
);

CREATE TABLE precipitation_max (
  id SERIAL PRIMARY KEY,
  inches FLOAT,
  cm FLOAT
);

CREATE TABLE planting_density_min (
  id SERIAL PRIMARY KEY,
  sqm FLOAT,
  acre FLOAT
);

CREATE TABLE planting_density_max (
  id SERIAL PRIMARY KEY,
  sqm FLOAT,
  acre FLOAT
);

CREATE TABLE growth (
  id SERIAL PRIMARY KEY,
  ph_min FLOAT,
  ph_max FLOAT,
  moisture_use VARCHAR,
  frost_free_days_min VARCHAR,
  fertility_req VARCHAR,
  resprout_ability BOOLEAN,
  cold_stratification_req VARCHAR,
  shade_tolerance VARCHAR, 
  salinity_tolerance VARCHAR,
  hedge_tolerance VARCHAR,
  fire_tolerance VARCHAR,
  drought_tolerance VARCHAR,
  caco_3_tolerance VARCHAR,
  anaerobic_tolerance VARCHAR,
  temperature_min_id INT REFERENCES temperature_min(id),
  root_depth_min_id  INT REFERENCES root_depth_min(id),
  precipitation_min_id INT REFERENCES precipitation_min(id),
  precipitation_max_id INT REFERENCES precipitation_max(id),
  planting_density_min_id INT REFERENCES planting_density_min(id),
  planting_density_max_id INT REFERENCES planting_density_max(id)
);




-- --connection to M_S
CREATE TABLE flower (
  id SERIAL PRIMARY KEY,
  color VARCHAR(20),
  conspicuous BOOLEAN
);

CREATE TABLE foliage (
  id SERIAL PRIMARY KEY, 
  texture VARCHAR, 
  porosity_winter VARCHAR,
  porosity_summer VARCHAR,
  color VARCHAR
);

CREATE TABLE fruit_or_seed (
  id SERIAL PRIMARY KEY,
  seed_persistance VARCHAR,
  seed_period_end VARCHAR(7),
  seed_period_begin VARCHAR(7),
  seed_abundance VARCHAR,
  conspicuous BOOLEAN,
  color VARCHAR(20)
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  veneer VARCHAR,
  pulpwood VARCHAR, 
  protein_potential VARCHAR,
  post VARCHAR,
  palatable_human VARCHAR, 
  palatable_grazing_animal VARCHAR,
  palatable_browse_animal VARCHAR,
  nursery_stock BOOLEAN,
  naval_store VARCHAR,
  lumber VARCHAR,
  fuelwood VARCHAR,
  fodder VARCHAR,
  christmas_tree VARCHAR,
  berry_nut_seed VARCHAR
);

CREATE TABLE propagation (
  id SERIAL PRIMARY KEY,
  tubers BOOLEAN,
  sprigs BOOLEAN,
  sod BOOLEAN,
  seed BOOLEAN,
  cuttings BOOLEAN,
  corms BOOLEAN,
  container BOOLEAN,
  bulbs BOOLEAN,
  bare_root BOOLEAN
);

CREATE TABLE seed (
  id SERIAL PRIMARY KEY,
  speed_spread_rate VARCHAR,
  vegetative_spread_rate VARCHAR,
  small_grain VARCHAR,
  seeds_per_pound INT,
  seedling_vigor VARCHAR(8),
  commercial_availability VARCHAR(20),
  bloom_period VARCHAR(7)
);

CREATE TABLE soils_adaptation (
  id SERIAL PRIMARY KEY,
  fine BOOLEAN,
  medium BOOLEAN,
  coarse BOOLEAN
);


CREATE TABLE main_species (
  id SERIAL PRIMARY KEY,
  scientific_name VARCHAR,
  ms_year VARCHAR(4),
  ms_type VARCHAR,
  ms_synonym VARCHAR, 
  ms_status VARCHAR, 
  slug VARCHAR, 
  is_main_species BOOLEAN,
  complete_data BOOLEAN,
  flower_id INT REFERENCES flower(id),
  foliage_id INT REFERENCES foliage(id),
  fruit_or_seed_id INT REFERENCES fruit_or_seed(id),
  growth_id INT REFERENCES growth(id),
  products_id INT REFERENCES products(id),
  propagation_id INT REFERENCES propagation(id), 
  seed_id INT REFERENCES seed(id),
  soils_adaptation_id INT REFERENCES soils_adaptation(id),
  specifications_id INT REFERENCES specifications(id)
);



-- connected to plant
CREATE TABLE class (
  id SERIAL PRIMARY KEY,
  slug VARCHAR,
  class_name VARCHAR,
  link VARCHAR
);

CREATE TABLE division (
  id SERIAL PRIMARY KEY,
  slug VARCHAR,
  division_name VARCHAR,
  link VARCHAR
);

CREATE TABLE genus (
  id SERIAL PRIMARY KEY,
  slug VARCHAR,
  genus_name VARCHAR,
  link VARCHAR
);

CREATE TABLE family (
  id SERIAL PRIMARY KEY,
  slug VARCHAR,
  family_name VARCHAR,
  link VARCHAR,
  family_common_name VARCHAR
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  slug VARCHAR,
  orders_name VARCHAR,
  link VARCHAR
);

---------

CREATE TABLE plant (
  id SERIAL PRIMARY KEY, 
  native_status VARCHAR(50), 
  duration VARCHAR, 
  common_name VARCHAR(50),
  class_id INT REFERENCES class(id), 
  division_id  INT REFERENCES division(id), 
  family_id INT REFERENCES family(id), 
  genus_id INT REFERENCES genus(id), 
  main_species_id INT REFERENCES main_species(id), 
  order_id INT REFERENCES orders(id)
);

-- direct connection to P

CREATE TABLE images (
  id SERIAL PRIMARY KEY, 
  image_url VARCHAR,
  plant_id INT REFERENCES plant(id)
);

CREATE TABLE varieties (
  id SERIAL PRIMARY KEY,
  plant_id INT REFERENCES plant(id),
  varieties_name VARCHAR
);

CREATE TABLE hybrid (
  id SERIAL PRIMARY KEY,
  plant_id INT REFERENCES plant(id),
  hybrid_name VARCHAR
);

CREATE TABLE forms (
  id SERIAL PRIMARY KEY,
  plant_id INT REFERENCES plant(id),
  forms_name VARCHAR
);

CREATE TABLE cultivars (
  id SERIAL PRIMARY KEY,
  plant_id INT REFERENCES plant(id),
  cultivars_name VARCHAR
);